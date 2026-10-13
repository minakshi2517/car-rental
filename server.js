require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'cars.json');
const SEED_FILE = path.join(__dirname, 'data', 'cars_seed.json');

// Ensure data folder exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
}

// Backup seed if not existing
if (fs.existsSync(DATA_FILE) && !fs.existsSync(SEED_FILE)) {
  fs.copyFileSync(DATA_FILE, SEED_FILE);
}

// Helper to read cars from JSON database
function readCars() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      if (fs.existsSync(SEED_FILE)) {
        fs.copyFileSync(SEED_FILE, DATA_FILE);
      } else {
        return [];
      }
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading cars database:', err);
    return [];
  }
}

// Helper to write cars to JSON database
function writeCars(cars) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(cars, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing cars database:', err);
    return false;
  }
}

// Helper for filtering
function carMatchesFilter(car, filterCategory) {
  if (!filterCategory || filterCategory === 'all') return true;
  const f = filterCategory.toLowerCase().trim();
  if (f === 'hatchback' || f === 'hatchbacks') {
    return car.category === 'hatchback';
  }
  if (f === 'suv' || f === 'suvs') {
    return car.category === 'suv' || car.category === 'compact-suv' || car.category === 'offroad' || car.category === 'luxury';
  }
  if (f === 'economy' || f === 'economy-cars' || f === 'economy cars' || f === 'economy_cars') {
    return car.isEconomy === true || car.pricePerDay <= 3500;
  }
  return car.category === f;
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from project root
app.use(express.static(__dirname));

// Multer Storage Configuration for Car Image Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'images');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
    const safeBase = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
    const uniqueName = `upload_${Date.now()}_${safeBase}${ext}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: function (req, file, cb) {
    const allowed = /jpeg|jpg|png|webp|svg/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext || mime) {
      return cb(null, true);
    }
    cb(new Error('Only image files (jpg, png, webp, svg) are allowed!'));
  }
});

/* ================================================================
   ADMIN AUTHENTICATION
   ================================================================ */
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'scecarrental@gmail.com',
  password: process.env.ADMIN_PASSWORD || 'Sce@FivePs'
};
const activeSessions = new Set();

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  const cleanUser = (username || '').trim().toLowerCase();
  const cleanExpected = ADMIN_CREDENTIALS.username.toLowerCase();

  if ((cleanUser === cleanExpected || cleanUser === 'info@scecarrental.in') && password === ADMIN_CREDENTIALS.password) {
    const token = 'sce_admin_' + Date.now() + '_' + Math.random().toString(36).substring(2);
    activeSessions.add(token);
    return res.json({
      success: true,
      message: 'Authentication successful',
      token: token,
      user: {
        username: cleanUser === 'info@scecarrental.in' ? 'info@scecarrental.in' : ADMIN_CREDENTIALS.username
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      error: 'Invalid username or password. Access denied.'
    });
  }
});

app.post('/api/admin/verify', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = (authHeader && authHeader.startsWith('Bearer ')) 
    ? authHeader.substring(7) 
    : (req.body && req.body.token);
  if (token && activeSessions.has(token)) {
    return res.json({ valid: true, user: ADMIN_CREDENTIALS.username });
  }
  return res.status(401).json({ valid: false, error: 'Session invalid or expired' });
});

app.post('/api/admin/logout', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = (authHeader && authHeader.startsWith('Bearer ')) 
    ? authHeader.substring(7) 
    : (req.body && req.body.token);
  if (token) {
    activeSessions.delete(token);
  }
  res.json({ success: true, message: 'Logged out successfully' });
});

/* ================================================================
   API ENDPOINTS
   ================================================================ */

// Health & Status
app.get('/api/health', (req, res) => {
  const cars = readCars();
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    totalCars: cars.length
  });
});

// GET /api/cars - List all cars with optional filters
app.get('/api/cars', (req, res) => {
  const cars = readCars();
  const { category, search } = req.query;

  let result = cars;

  if (category && category !== 'all') {
    result = result.filter(car => carMatchesFilter(car, category));
  }

  if (search) {
    const q = search.toLowerCase().trim();
    result = result.filter(car => 
      (car.name && car.name.toLowerCase().includes(q)) ||
      (car.categoryName && car.categoryName.toLowerCase().includes(q)) ||
      (car.modelYear && car.modelYear.toString().includes(q))
    );
  }

  res.json(result);
});

// GET /api/cars/:id - Get a single car
app.get('/api/cars/:id', (req, res) => {
  const cars = readCars();
  const car = cars.find(c => c.id === req.params.id);
  if (!car) {
    return res.status(404).json({ error: 'Car not found' });
  }
  res.json(car);
});

// POST /api/cars - Add new car
app.post('/api/cars', (req, res) => {
  try {
    const {
      name,
      modelYear,
      pricePerDay,
      category,
      categoryName,
      transmission,
      fuel,
      seats,
      mileage,
      badge,
      badgeType,
      image,
      features,
      deposit,
      freeKms,
      popular
    } = req.body;

    if (!name || !pricePerDay) {
      return res.status(400).json({ error: 'Car Name and Price Per Day are required.' });
    }

    const cars = readCars();

    // Generate unique ID slug
    const cleanName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    let newId = `${cleanName}-${modelYear || '2025'}`;
    let counter = 1;
    while (cars.some(c => c.id === newId)) {
      newId = `${cleanName}-${modelYear || '2025'}-${counter++}`;
    }

    const priceNum = parseInt(pricePerDay, 10);
    const cat = category || 'suv';

    const newCar = {
      id: newId,
      name: name.trim(),
      modelYear: (modelYear || '2025').toString(),
      pricePerDay: priceNum,
      category: cat,
      categoryName: categoryName || (cat === 'hatchback' ? 'Premium Hatchback' : 'SUV'),
      isEconomy: priceNum <= 3500,
      transmission: transmission || 'Automatic',
      fuel: fuel || 'Petrol',
      seats: seats || '5 Seater',
      mileage: mileage || '18.0 km/l',
      badge: badge || 'New Addition',
      badgeType: badgeType || 'primary',
      image: image || 'images/mahindra scorpio -n.jpeg',
      features: Array.isArray(features) ? features : (features ? features.split(',').map(s => s.trim()) : ['Air Conditioning', 'Push Button Start', 'Touchscreen Infotainment', 'Reverse Parking Sensors']),
      deposit: deposit ? parseInt(deposit, 10) : 3000,
      freeKms: freeKms || '300 km/day',
      popular: Boolean(popular)
    };

    cars.unshift(newCar); // Add to beginning of array
    writeCars(cars);

    res.status(201).json({
      success: true,
      message: 'Vehicle added successfully to fleet!',
      car: newCar
    });
  } catch (err) {
    console.error('Error adding car:', err);
    res.status(500).json({ error: 'Failed to add vehicle: ' + err.message });
  }
});

// PUT /api/cars/:id - Edit existing car
app.put('/api/cars/:id', (req, res) => {
  try {
    const carId = req.params.id;
    const cars = readCars();
    const index = cars.findIndex(c => c.id === carId);

    if (index === -1) {
      return res.status(404).json({ error: 'Vehicle with ID ' + carId + ' not found.' });
    }

    const existing = cars[index];
    const b = req.body;

    const priceNum = b.pricePerDay !== undefined ? parseInt(b.pricePerDay, 10) : existing.pricePerDay;

    const updatedCar = {
      ...existing,
      name: b.name !== undefined ? b.name.trim() : existing.name,
      modelYear: b.modelYear !== undefined ? b.modelYear.toString() : existing.modelYear,
      pricePerDay: priceNum,
      category: b.category !== undefined ? b.category : existing.category,
      categoryName: b.categoryName !== undefined ? b.categoryName : existing.categoryName,
      isEconomy: priceNum <= 3500,
      transmission: b.transmission !== undefined ? b.transmission : existing.transmission,
      fuel: b.fuel !== undefined ? b.fuel : existing.fuel,
      seats: b.seats !== undefined ? b.seats : existing.seats,
      mileage: b.mileage !== undefined ? b.mileage : existing.mileage,
      badge: b.badge !== undefined ? b.badge : existing.badge,
      badgeType: b.badgeType !== undefined ? b.badgeType : existing.badgeType,
      image: b.image !== undefined ? b.image : existing.image,
      features: Array.isArray(b.features) ? b.features : (b.features ? b.features.split(',').map(s => s.trim()) : existing.features),
      deposit: b.deposit !== undefined ? parseInt(b.deposit, 10) : existing.deposit,
      freeKms: b.freeKms !== undefined ? b.freeKms : existing.freeKms,
      popular: b.popular !== undefined ? Boolean(b.popular) : existing.popular
    };

    cars[index] = updatedCar;
    writeCars(cars);

    res.json({
      success: true,
      message: 'Vehicle updated successfully!',
      car: updatedCar
    });
  } catch (err) {
    console.error('Error updating car:', err);
    res.status(500).json({ error: 'Failed to update vehicle: ' + err.message });
  }
});

// DELETE /api/cars/:id - Delete a car
app.delete('/api/cars/:id', (req, res) => {
  try {
    const carId = req.params.id;
    const cars = readCars();
    const index = cars.findIndex(c => c.id === carId);

    if (index === -1) {
      return res.status(404).json({ error: 'Vehicle with ID ' + carId + ' not found.' });
    }

    const removed = cars.splice(index, 1)[0];
    writeCars(cars);

    res.json({
      success: true,
      message: `Vehicle "${removed.name}" removed from fleet.`,
      deletedCar: removed
    });
  } catch (err) {
    console.error('Error deleting car:', err);
    res.status(500).json({ error: 'Failed to delete vehicle: ' + err.message });
  }
});

// POST /api/upload - Upload an image
app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file uploaded.' });
    }
    const relativePath = 'images/' + req.file.filename;
    res.json({
      success: true,
      message: 'Image uploaded successfully!',
      imagePath: relativePath,
      filename: req.file.filename
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Image upload failed: ' + err.message });
  }
});

// POST /api/cars/reset - Reset fleet to showroom defaults
app.post('/api/cars/reset', (req, res) => {
  try {
    if (fs.existsSync(SEED_FILE)) {
      fs.copyFileSync(SEED_FILE, DATA_FILE);
      const cars = readCars();
      res.json({
        success: true,
        message: 'Fleet successfully reset to showroom default models!',
        totalCars: cars.length
      });
    } else {
      res.status(404).json({ error: 'Seed backup file not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Reset failed: ' + err.message });
  }
});

// POST /api/delivery-quote - Calculate distance from Sector 93 Hub & dynamic delivery charges
app.post('/api/delivery-quote', (req, res) => {
  try {
    const { lat, lon, address } = req.body;
    if (lat === undefined || lon === undefined) {
      return res.status(400).json({ error: 'Latitude and Longitude are required.' });
    }

    const HUB_LAT = 28.4013;
    const HUB_LON = 76.9248;

    // Haversine Distance in Kilometres
    const toRad = x => (x * Math.PI) / 180;
    const dLat = toRad(lat - HUB_LAT);
    const dLon = toRad(lon - HUB_LON);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(HUB_LAT)) * Math.cos(toRad(lat)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const aerialKm = 6371 * c;
    const roadKm = Math.round(aerialKm * 1.25 * 10) / 10; // ~1.25 road factor multiplier

    let fee = 0;
    let zone = 'Local Hub (Sector 93)';
    let requiresCall = false;
    let message = '';

    if (roadKm <= 5) {
      fee = 0;
      zone = 'Sector 93 Free Hub Zone (<= 5 km)';
      message = 'Free doorstep delivery in Sector 93 & immediate vicinity!';
    } else if (roadKm <= 18) {
      fee = 499;
      zone = 'Gurugram Core Delivery (5 - 18 km)';
      message = 'Standard Gurugram doorstep delivery (Cyber City, Golf Course, Sohna Rd).';
    } else if (roadKm <= 30) {
      fee = 799;
      zone = 'Extended NCR / Airport Zone (18 - 30 km)';
      message = 'Express delivery to Delhi Airport IGI & South/West Delhi.';
    } else {
      // Beyond 30 km: Base 799 + 25 per extra km
      const extraKm = Math.ceil(roadKm - 30);
      fee = 799 + (extraKm * 25);
      zone = `Outstation / Far NCR (${roadKm} km)`;
      requiresCall = true;
      message = `Distance is ${roadKm} km from Sector 93 Hub. Outstation delivery charge: ₹${fee}. Our manager will call you to confirm dispatch timing & route!`;
    }

    res.json({
      success: true,
      hub: 'F Tower Orchard Avenue, Signature Global Sector 93, Gurugram',
      distanceKm: roadKm,
      deliveryFee: fee,
      deliveryZone: zone,
      requiresConfirmationCall: requiresCall,
      message: message,
      detectedAddress: address || null
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to calculate delivery quote: ' + err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚗 Shree Chakardhar Enterprises Backend Active!`);
  console.log(`🌐 Server running at: http://localhost:${PORT}`);
  console.log(`📦 Database path: ${DATA_FILE}`);
  console.log(`====================================================`);
});
