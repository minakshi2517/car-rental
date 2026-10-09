/**
 * SHREE CHAKARDHAR ENTERPRISES - Car Rental Portal Engine
 * Full fleet dataset matching client handwritten note + Grand Vitara 2024 (3200/-)
 * WhatsApp Direct Integration: 8396977520
 * Email: Shreechakardharenterprises@gmail.com
 * Location: F Tower Orchard Avenue, Signature Global Sector 93, Gurugram
 * Office Timings: 9:00 AM to 10:00 PM
 */

const WHATSAPP_PHONE = "918396977520";
const OFFICE_HOURS = { open: 9, close: 22 }; // 9 AM to 10 PM

// Fleet Inventory
const FLEET_DATA = [
  {
    id: "grand-vitara-2024",
    name: "Maruti Grand Vitara",
    modelYear: "2024",
    pricePerDay: 3200,
    category: "suv",
    categoryName: "Mid SUV",
    transmission: "Automatic / Manual",
    fuel: "Petrol Hybrid",
    seats: "5 Seater",
    mileage: "21.1 km/l",
    badge: "Special Add",
    badgeType: "gold",
    image: "images/grand-vitara.jpg",
    features: ["Panoramic Sunroof", "360° View Camera", "Wireless Charger", "Cruise Control", "Ventilated Seats"],
    deposit: 3000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "thar-roxx-2024",
    name: "Mahindra Thar Roxx (5-Door)",
    modelYear: "2024",
    pricePerDay: 6500,
    category: "offroad",
    categoryName: "4x4 Offroad SUV",
    transmission: "Automatic",
    fuel: "Diesel Turbo",
    seats: "5 Seater",
    mileage: "15.2 km/l",
    badge: "Trending 4x4",
    badgeType: "primary",
    image: "images/thar-roxx.jpg",
    features: ["Panoramic Skyroof", "4x4 Low/High Range", "Level 2 ADAS", "10.25 Inch HD Screens", "Harman Kardon Audio"],
    deposit: 5000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "scorpio-n-2024",
    name: "Mahindra Scorpio-N",
    modelYear: "2024",
    pricePerDay: 7900,
    category: "luxury",
    categoryName: "Luxury 7-Seater",
    transmission: "Automatic",
    fuel: "Diesel 2.2L mHawk",
    seats: "7 Seater",
    mileage: "14.5 km/l",
    badge: "VIP Boss Stance",
    badgeType: "gold",
    image: "images/scorpio-n.jpg",
    features: ["Sunroof", "Sony 3D 12-Speaker Sound", "Captain Seats", "4XPLOR Terrain Modes", "Wireless Android Auto/CarPlay"],
    deposit: 6000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "scorpio-n-facelift",
    name: "Mahindra Scorpio-N Facelift",
    modelYear: "2025/2026",
    pricePerDay: 8900,
    category: "luxury",
    categoryName: "Luxury 7-Seater",
    transmission: "Automatic 4x4",
    fuel: "Diesel Turbo",
    seats: "7 Seater",
    mileage: "14.0 km/l",
    badge: "Ultra Luxury",
    badgeType: "gold",
    image: "images/scorpio-n.jpg",
    features: ["Ventilated Seats", "Level 2 ADAS", "Dual-Zone Climate Control", "Full Digital Cockpit", "Powered Driver Seat"],
    deposit: 7000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "xuv-700-luxury",
    name: "Mahindra XUV 700 (AX7L)",
    modelYear: "2024/2025",
    pricePerDay: 7900,
    category: "luxury",
    categoryName: "Luxury 7-Seater",
    transmission: "Automatic",
    fuel: "Diesel / Petrol",
    seats: "7 Seater",
    mileage: "15.0 km/l",
    badge: "Top Spec",
    badgeType: "blue",
    image: "images/xuv700.jpg",
    features: ["Panoramic Skyroof", "Flush Smart Door Handles", "3D Audio by Sony", "Adaptive Cruise Control", "Blind View Monitor"],
    deposit: 6000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "tata-curvv-2024",
    name: "Tata Curvv Coupe SUV",
    modelYear: "2024",
    pricePerDay: 3600,
    category: "suv",
    categoryName: "Coupe SUV",
    transmission: "Automatic",
    fuel: "Hyperion Turbo Petrol",
    seats: "5 Seater",
    mileage: "18.5 km/l",
    badge: "New Arrival",
    badgeType: "primary",
    image: "images/curvv.jpg",
    features: ["Coupe Aerodynamics", "Powered Tailgate with Gesture", "Ventilated Front Seats", "Multi-Dial Digital Instrument", "JBL Cinema Audio"],
    deposit: 3500,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "thar-3door",
    name: "Mahindra Thar (3-Door Hardtop)",
    modelYear: "2024",
    pricePerDay: 5900,
    category: "offroad",
    categoryName: "4x4 Adventure",
    transmission: "Manual / Auto",
    fuel: "Diesel 4x4",
    seats: "4 Seater",
    mileage: "14.8 km/l",
    badge: "Off-Road King",
    badgeType: "primary",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    features: ["Mechanical Locking Diff", "Washable Interior with Drain Plugs", "Convertible/Hardtop Option", "Roll Cage Safety", "Touchscreen Navigation"],
    deposit: 5000,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "scorpio-s11-classic",
    name: "Mahindra Scorpio Classic S11",
    modelYear: "2024",
    pricePerDay: 6000,
    category: "luxury",
    categoryName: "Full-Size 7-Seater",
    transmission: "Manual",
    fuel: "Diesel 2.2L",
    seats: "7 / 9 Seater",
    mileage: "14.0 km/l",
    badge: "Heavy Duty",
    badgeType: "dark",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    features: ["Classic Muscle Grille", "Captains Executive Seats", "Hydraulic Power Steering", "Robust Ladder Frame", "High Seating Visibility"],
    deposit: 5000,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "kia-seltos-2024",
    name: "Kia Seltos",
    modelYear: "2024",
    pricePerDay: 4000,
    category: "suv",
    categoryName: "Premium Mid SUV",
    transmission: "Automatic",
    fuel: "Turbo Petrol / Diesel",
    seats: "5 Seater",
    mileage: "17.0 km/l",
    badge: "Executive",
    badgeType: "blue",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=900&q=80",
    features: ["Dual 10.25 Inch Curved Displays", "Panoramic Sunroof", "Bose 8-Speaker System", "Ambient Mood Lighting", "Air Purifier"],
    deposit: 4000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "tata-nexon-2025",
    name: "Tata Nexon",
    modelYear: "2025",
    pricePerDay: 3500,
    category: "compact-suv",
    categoryName: "Compact SUV",
    transmission: "DCA Automatic / Manual",
    fuel: "Turbo Petrol / Diesel",
    seats: "5 Seater",
    mileage: "19.2 km/l",
    badge: "5-Star Safety",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80",
    features: ["5-Star BNCAP Crash Safety", "Sequential LED Lightbars", "Voice Assisted Sunroof", "Touch Aircon Console", "Drive Modes (City/Eco/Sport)"],
    deposit: 3000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "hyundai-venue-2025",
    name: "Hyundai Venue",
    modelYear: "2025",
    pricePerDay: 3500,
    category: "compact-suv",
    categoryName: "Compact SUV",
    transmission: "Manual / Auto",
    fuel: "Petrol",
    seats: "5 Seater",
    mileage: "18.3 km/l",
    badge: "2025 Edition",
    badgeType: "blue",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    features: ["Electric Sunroof", "BlueLink Connected Tech", "Wireless Phone Projection", "Rear AC Vents", "Push Button Start"],
    deposit: 3000,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "hyundai-venue-2026",
    name: "Hyundai Venue",
    modelYear: "2026",
    pricePerDay: 3500,
    category: "compact-suv",
    categoryName: "Compact SUV",
    transmission: "Automatic",
    fuel: "Turbo Petrol",
    seats: "5 Seater",
    mileage: "18.8 km/l",
    badge: "2026 Model",
    badgeType: "blue",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    features: ["Digital Cockpit", "Smart Cruise Control", "Wireless Android Auto / Apple CarPlay", "Paddle Shifters", "Fast Type-C Ports"],
    deposit: 3000,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "mahindra-xuv3xo",
    name: "Mahindra XUV 3XO",
    modelYear: "2025",
    pricePerDay: 3500,
    category: "compact-suv",
    categoryName: "Compact SUV",
    transmission: "Automatic (TCMPFi)",
    fuel: "Turbo Petrol / Diesel",
    seats: "5 Seater",
    mileage: "18.5 km/l",
    badge: "Panoramic Skyroof",
    badgeType: "primary",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
    features: ["Segment-First Panoramic Sunroof", "Level 2 ADAS Suite", "130 PS Turbo Power", "Harmon 7-Speaker Audio", "Dual Zone AC"],
    deposit: 3000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "maruti-fronx-grey-2025",
    name: "Maruti Fronx (Grandeur Grey)",
    modelYear: "2025",
    pricePerDay: 3000,
    category: "compact-suv",
    categoryName: "Crossover SUV",
    transmission: "Manual / AGS",
    fuel: "Petrol 1.2L / Turbo",
    seats: "5 Seater",
    mileage: "22.8 km/l",
    badge: "Grey 2025",
    badgeType: "dark",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    features: ["Heads-Up Display (HUD)", "360 Degree View Camera", "9-inch SmartPlay Pro+ Touch", "Wireless Fast Charger", "High Ground Clearance"],
    deposit: 2500,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "maruti-fronx-white-2025",
    name: "Maruti Fronx (Pearl White)",
    modelYear: "2025",
    pricePerDay: 3000,
    category: "compact-suv",
    categoryName: "Crossover SUV",
    transmission: "Automatic",
    fuel: "Petrol DualJet",
    seats: "5 Seater",
    mileage: "22.8 km/l",
    badge: "White 2025",
    badgeType: "primary",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    features: ["Pearl Arctic White Exterior", "Paddle Shifters", "Cruise Control", "UV Cut Glass", "Smartplay Audio"],
    deposit: 2500,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "tata-punch-2026",
    name: "Tata Punch",
    modelYear: "2026",
    pricePerDay: 3000,
    category: "compact-suv",
    categoryName: "Micro SUV",
    transmission: "Automatic / Manual",
    fuel: "Petrol",
    seats: "5 Seater",
    mileage: "20.1 km/l",
    badge: "2026 Model",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    features: ["5-Star Global NCAP Rating", "90-Degree Opening Doors", "Harman Infotainment", "Terrain Traction Pro", "Auto Headlamps"],
    deposit: 2500,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "tata-punch-2024",
    name: "Tata Punch",
    modelYear: "2024",
    pricePerDay: 3000,
    category: "compact-suv",
    categoryName: "Micro SUV",
    transmission: "Manual",
    fuel: "Petrol 1.2L",
    seats: "5 Seater",
    mileage: "20.1 km/l",
    badge: "2024 Model",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    features: ["Solid Build Quality", "Spacious Cabin", "Cruise Control", "Rear Defogger & Wiper", "Dual Airbags"],
    deposit: 2500,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "hyundai-exter-2024",
    name: "Hyundai Exter",
    modelYear: "2024/2025",
    pricePerDay: 2500,
    category: "compact-suv",
    categoryName: "Micro SUV",
    transmission: "Manual / AMT",
    fuel: "Petrol 1.2L",
    seats: "5 Seater",
    mileage: "19.4 km/l",
    badge: "Best Value",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80",
    features: ["Smart Electric Sunroof", "Factory Dashcam (Dual)", "6 Airbags Standard", "H-Signature LED DRLs", "Digital Cluster"],
    deposit: 2000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "maruti-baleno-2026",
    name: "Maruti Baleno",
    modelYear: "2026",
    pricePerDay: 3000,
    category: "hatchback",
    categoryName: "Premium Hatchback",
    transmission: "Automatic",
    fuel: "Petrol DualJet",
    seats: "5 Seater",
    mileage: "22.9 km/l",
    badge: "2026 Model",
    badgeType: "blue",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80",
    features: ["Heads-Up Display", "360 Surround View", "Auto Climate Control", "Arkamys Surround Sound", "Tilt & Telescopic Steering"],
    deposit: 2500,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "maruti-baleno-2024",
    name: "Maruti Baleno",
    modelYear: "2024",
    pricePerDay: 2800,
    category: "hatchback",
    categoryName: "Premium Hatchback",
    transmission: "Manual",
    fuel: "Petrol 1.2L",
    seats: "5 Seater",
    mileage: "22.3 km/l",
    badge: "2024 Model",
    badgeType: "blue",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80",
    features: ["Smooth 4-Cylinder Engine", "Spacious Boot Space (318L)", "Touchscreen Apple CarPlay", "Smart Key Push Start"],
    deposit: 2500,
    freeKms: "300 km/day",
    popular: false
  },
  {
    id: "maruti-swift-new",
    name: "Maruti Swift (All-New)",
    modelYear: "2025",
    pricePerDay: 2800,
    category: "hatchback",
    categoryName: "Hatchback",
    transmission: "Manual / AGS",
    fuel: "Petrol (Z-Series)",
    seats: "5 Seater",
    mileage: "25.75 km/l",
    badge: "High Mileage",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80",
    features: ["All-New Z12E Engine", "25.75 km/l Highest Mileage", "6 Airbags Standard", "Wireless Android Auto / CarPlay", "Sporty Steering"],
    deposit: 2000,
    freeKms: "300 km/day",
    popular: true
  },
  {
    id: "maruti-swift-white",
    name: "Maruti Swift (Pearl White)",
    modelYear: "2024/2025",
    pricePerDay: 2800,
    category: "hatchback",
    categoryName: "Hatchback",
    transmission: "Manual",
    fuel: "Petrol",
    seats: "5 Seater",
    mileage: "24.0 km/l",
    badge: "City Ride",
    badgeType: "dark",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80",
    features: ["Pearl Arctic White Finish", "Touchscreen Audio", "Electrically Foldable ORVMs", "Smooth City Drive", "Chilled AC"],
    deposit: 2000,
    freeKms: "300 km/day",
    popular: false
  }
];

// App State
let currentCategory = "all";
let searchQuery = "";
let selectedCarForBooking = null;
let appliedDiscount = 0;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initOfficeTimings();
  initDefaultDates();
  renderFleetCards();
  initCategoryFilters();
  initSearchInput();
  initFAQAccordion();
  initMobileNav();
  initHeroScrollAnimation();
});

/**
 * Hero Section Kinetic Zoom & Content Reveal on Scroll
 */
function initHeroScrollAnimation() {
  const kineticFrame = document.getElementById("kineticCarFrame");
  const revealElements = document.querySelectorAll(".hero-reveal-element");

  if (!kineticFrame && revealElements.length === 0) return;

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 20) {
      if (kineticFrame) kineticFrame.classList.add("revealed");
      revealElements.forEach(el => el.classList.add("active"));
    } else {
      if (kineticFrame) kineticFrame.classList.remove("revealed");
      revealElements.forEach(el => el.classList.remove("active"));
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Switch Hero Car Image & Instant Reserve Thumb
 */
function switchHeroCar(carKey) {
  const heroCarImg = document.getElementById("heroMainCarImage");
  const showcaseThumb = document.getElementById("showcaseThumb");

  const carImages = {
    'thar-roxx': 'images/thar-roxx.jpg',
    'scorpio-n': 'images/scorpio-n.jpg',
    'grand-vitara': 'images/grand-vitara.jpg',
    'curvv': 'images/curvv.jpg'
  };

  const selectedImage = carImages[carKey] || 'images/thar-roxx.jpg';

  if (heroCarImg) {
    heroCarImg.style.opacity = '0.3';
    setTimeout(() => {
      heroCarImg.src = selectedImage;
      heroCarImg.style.opacity = '1';
    }, 150);
  }

  if (showcaseThumb) {
    showcaseThumb.src = selectedImage;
  }

  const chips = document.querySelectorAll(".car-switch-chip");
  chips.forEach(chip => {
    if (chip.getAttribute("onclick")?.includes(carKey)) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
}

/**
 * Check if office is currently open (9:00 AM - 10:00 PM IST)
 */
function initOfficeTimings() {
  const statusElem = document.getElementById("officeStatusBadge");
  if (!statusElem) return;

  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= OFFICE_HOURS.open && currentHour < OFFICE_HOURS.close) {
    statusElem.innerHTML = `<span class="live-dot"></span> Open Now • Closes 10:00 PM`;
    statusElem.classList.add("status-badge-live");
  } else {
    statusElem.innerHTML = `<span class="live-dot" style="background:#f59e0b;box-shadow:0 0 8px #f59e0b;"></span> Closed • Opens 9:00 AM`;
    statusElem.style.borderColor = "rgba(245, 158, 11, 0.4)";
    statusElem.style.color = "#fbbf24";
  }
}

/**
 * Initialize Default Booking Dates (Today + 3 Days)
 */
function initDefaultDates() {
  const today = new Date();
  const returnDate = new Date();
  returnDate.setDate(today.getDate() + 3);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const pickupInputs = document.querySelectorAll(".pickup-date-input");
  const returnInputs = document.querySelectorAll(".return-date-input");

  pickupInputs.forEach(input => {
    input.min = formatDate(today);
    input.value = formatDate(today);
    input.addEventListener("change", updateDurationCalculations);
  });

  returnInputs.forEach(input => {
    input.min = formatDate(today);
    input.value = formatDate(returnDate);
    input.addEventListener("change", updateDurationCalculations);
  });
}

/**
 * Render Cars Grid
 */
function renderFleetCards() {
  const container = document.getElementById("fleetGridContainer");
  if (!container) return;

  let filtered = FLEET_DATA.filter(car => {
    const matchCategory = currentCategory === "all" || car.category === currentCategory;
    const matchSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        car.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        car.modelYear.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-cars-found">
        <i class="fa-solid fa-car-tunnel"></i>
        <h3>No cars found matching "${searchQuery}"</h3>
        <p>Try searching for Grand Vitara, Thar Roxx, Scorpio-N, Curvv, Venue, Baleno, or Swift.</p>
        <button class="btn btn-primary btn-sm" onclick="resetFilters()" style="margin-top:16px;">
          View All Fleet
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(car => `
    <div class="car-card" data-car-id="${car.id}">
      <div class="car-card-header">
        <span class="car-badge-top badge badge-${car.badgeType}">${car.badge}</span>
        <span class="car-badge-model">${car.modelYear} Model</span>
        <img src="${car.image}" alt="${car.name}" class="car-card-img" onerror="this.src='images/hero-banner.jpg'">
      </div>

      <div class="car-card-body">
        <span class="car-category-sub">${car.categoryName}</span>
        <h3 class="car-name-title">${car.name}</h3>

        <div class="car-specs-grid">
          <div class="spec-item">
            <i class="fa-solid fa-gas-pump"></i>
            <span>${car.fuel.split(" ")[0]}</span>
          </div>
          <div class="spec-item">
            <i class="fa-solid fa-gears"></i>
            <span>${car.transmission.split(" ")[0]}</span>
          </div>
          <div class="spec-item">
            <i class="fa-solid fa-users"></i>
            <span>${car.seats.split(" ")[0]} Seats</span>
          </div>
        </div>

        <div class="car-card-footer">
          <div class="car-price-box">
            <div class="price-main">₹${car.pricePerDay.toLocaleString("en-IN")}<span>/-</span></div>
            <div class="price-unit">Per Day (24 hrs)</div>
          </div>

          <div class="car-actions-group">
            <button class="btn btn-secondary btn-sm" onclick="openCarDetailsModal('${car.id}')" title="View Specs">
              Specs
            </button>
            <button class="btn btn-primary btn-sm" onclick="openBookingModal('${car.id}')">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

/**
 * Filter Categories Handling
 */
function initCategoryFilters() {
  const buttons = document.querySelectorAll(".pill-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category") || "all";
      renderFleetCards();
    });
  });
}

/**
 * Search Bar Handling
 */
function initSearchInput() {
  const searchInput = document.getElementById("fleetSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderFleetCards();
  });
}

function resetFilters() {
  currentCategory = "all";
  searchQuery = "";
  const searchInput = document.getElementById("fleetSearchInput");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".pill-btn").forEach((b, idx) => {
    if (idx === 0) b.classList.add("active");
    else b.classList.remove("active");
  });
  renderFleetCards();
}

/**
 * Open Booking Modal & Live Calculator
 */
function openBookingModal(carId) {
  const car = FLEET_DATA.find(c => c.id === carId);
  if (!car) return;
  selectedCarForBooking = car;
  appliedDiscount = 0;

  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  document.getElementById("modalCarName").innerText = car.name;
  document.getElementById("modalCarYear").innerText = car.modelYear + " Model";
  document.getElementById("modalCarCategory").innerText = car.categoryName;
  document.getElementById("modalCarImg").src = car.image;
  document.getElementById("modalCarDailyPrice").innerText = "₹" + car.pricePerDay.toLocaleString("en-IN") + "/day";
  document.getElementById("modalCarDeposit").innerText = "₹" + car.deposit.toLocaleString("en-IN") + " (100% Refundable)";
  document.getElementById("modalCarTransmission").innerText = car.transmission;
  document.getElementById("modalCarFuel").innerText = car.fuel;
  document.getElementById("modalCarSeats").innerText = car.seats;
  document.getElementById("modalCarMileage").innerText = car.mileage;

  updateFareBreakdown();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

/**
 * Calculate Total Fare Breakdown
 */
function updateFareBreakdown() {
  if (!selectedCarForBooking) return;

  const pickupInput = document.getElementById("modalPickupDate");
  const returnInput = document.getElementById("modalReturnDate");

  let days = 3; // default
  if (pickupInput && returnInput && pickupInput.value && returnInput.value) {
    const start = new Date(pickupInput.value);
    const end = new Date(returnInput.value);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    days = diffDays > 0 ? diffDays : 1;
  }

  const baseFare = selectedCarForBooking.pricePerDay * days;
  
  // Optional add-ons
  const doorstepCheck = document.getElementById("addonDoorstep");
  const unlimitedKmsCheck = document.getElementById("addonUnlimitedKms");
  const damageCoverCheck = document.getElementById("addonDamageCover");

  const doorstepCost = doorstepCheck && doorstepCheck.checked ? 499 : 0;
  const unlimitedKmsCost = unlimitedKmsCheck && unlimitedKmsCheck.checked ? (300 * days) : 0;
  const damageCoverCost = damageCoverCheck && damageCoverCheck.checked ? (250 * days) : 0;

  const subtotal = baseFare + doorstepCost + unlimitedKmsCost + damageCoverCost;
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const refundableDeposit = selectedCarForBooking.deposit;
  const totalAmount = subtotal - discountAmount;

  // Update UI Elements
  document.getElementById("fareDaysCount").innerText = `${days} Day${days > 1 ? 's' : ''}`;
  document.getElementById("fareBaseTotal").innerText = `₹${baseFare.toLocaleString("en-IN")}`;
  document.getElementById("fareDoorstepFee").innerText = doorstepCost > 0 ? `+₹${doorstepCost}` : `₹0 (Hub Pickup)`;
  document.getElementById("fareUnlimitedFee").innerText = unlimitedKmsCost > 0 ? `+₹${unlimitedKmsCost}` : `Included (300km/d)`;
  document.getElementById("fareDiscountFee").innerText = discountAmount > 0 ? `-₹${discountAmount}` : `₹0`;
  document.getElementById("fareDepositFee").innerText = `₹${refundableDeposit.toLocaleString("en-IN")}`;
  document.getElementById("fareFinalPayable").innerText = `₹${totalAmount.toLocaleString("en-IN")}`;
}

function updateDurationCalculations() {
  updateFareBreakdown();
}

/**
 * Apply Promo Coupon
 */
function applyCouponCode() {
  const input = document.getElementById("couponInput");
  const code = input ? input.value.trim().toUpperCase() : "";

  if (code === "SHREE10" || code === "WELCOME10") {
    appliedDiscount = 0.10; // 10%
    showToast("🎉 Promo code applied! 10% First Ride Discount added.", "success");
  } else if (code === "GURGAON15") {
    appliedDiscount = 0.15; // 15%
    showToast("🔥 GURGAON15 applied! 15% Special Discount added.", "success");
  } else {
    appliedDiscount = 0;
    showToast("Invalid Coupon Code. Try 'SHREE10' or 'WELCOME10'", "info");
  }
  updateFareBreakdown();
}

/**
 * Send Booking Directly via WhatsApp (8396977520)
 */
function submitWhatsAppBooking(e) {
  if (e) e.preventDefault();
  if (!selectedCarForBooking) return;

  const name = document.getElementById("custName")?.value || "Guest";
  const phone = document.getElementById("custPhone")?.value || "";
  const pickupLocation = document.getElementById("custLocation")?.value || "Gurugram Hub / Doorstep";
  const pickupDate = document.getElementById("modalPickupDate")?.value || "Today";
  const returnDate = document.getElementById("modalReturnDate")?.value || "3 Days later";
  const totalPayable = document.getElementById("fareFinalPayable")?.innerText || `₹${selectedCarForBooking.pricePerDay}`;
  const days = document.getElementById("fareDaysCount")?.innerText || "3 Days";

  if (!phone || phone.length < 10) {
    showToast("Please enter a valid 10-digit mobile number.", "info");
    return;
  }

  const message = `🚘 *CAR RENTAL BOOKING INQUIRY*
━━━━━━━━━━━━━━━━━━━━━━
*Customer Name:* ${name}
*Phone Number:* ${phone}
*Car Selected:* ${selectedCarForBooking.name} (${selectedCarForBooking.modelYear} Model)
*Daily Rate:* ₹${selectedCarForBooking.pricePerDay}/day
*Rental Duration:* ${days} (${pickupDate} to ${returnDate})
*Pickup Location:* ${pickupLocation}
*Est. Total Rental:* ${totalPayable}
━━━━━━━━━━━━━━━━━━━━━━
*Office Address:* F Tower Orchard Avenue Signature Global Sector 93, Gurugram
*Office Timing:* 9 AM - 10 PM
Please confirm vehicle availability and reservation process. Thank you!`;

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;

  window.open(url, "_blank");
  showToast("Opening WhatsApp with your booking details...", "success");
  closeBookingModal();
}

/**
 * Open Car Details Specs Modal
 */
function openCarDetailsModal(carId) {
  const car = FLEET_DATA.find(c => c.id === carId);
  if (!car) return;

  const modal = document.getElementById("carDetailsModal");
  if (!modal) return;

  document.getElementById("specModalTitle").innerText = `${car.name} (${car.modelYear})`;
  document.getElementById("specModalImg").src = car.image;
  document.getElementById("specModalPrice").innerText = `₹${car.pricePerDay.toLocaleString("en-IN")}/day`;
  document.getElementById("specModalCategory").innerText = car.categoryName;
  document.getElementById("specModalFuel").innerText = car.fuel;
  document.getElementById("specModalTrans").innerText = car.transmission;
  document.getElementById("specModalSeats").innerText = car.seats;
  document.getElementById("specModalMileage").innerText = car.mileage;
  document.getElementById("specModalDeposit").innerText = `₹${car.deposit.toLocaleString("en-IN")}`;
  document.getElementById("specModalKms").innerText = car.freeKms;

  const featuresList = document.getElementById("specModalFeatures");
  if (featuresList) {
    featuresList.innerHTML = car.features.map(f => `<li><i class="fa-solid fa-circle-check" style="color:var(--primary);margin-right:8px;"></i>${f}</li>`).join("");
  }

  document.getElementById("specModalBookBtn").onclick = () => {
    closeCarDetailsModal();
    openBookingModal(car.id);
  };

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCarDetailsModal() {
  const modal = document.getElementById("carDetailsModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

/**
 * FAQ Accordion Toggle
 */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");
    if (btn) {
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!isOpen) {
          item.classList.add("active");
        }
      });
    }
  });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      toggleBtn.innerHTML = navMenu.classList.contains("active") 
        ? `<i class="fa-solid fa-xmark"></i>` 
        : `<i class="fa-solid fa-bars"></i>`;
    });
  }
}

/**
 * Toast Notifications
 */
function showToast(message, type = "info") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}" style="color:${type === 'success' ? '#10b981' : '#ff7a00'};font-size:1.2rem;"></i>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Hero Search form submission handler
function handleHeroSearch(e) {
  if (e) e.preventDefault();
  const location = document.getElementById("heroPickupLocation")?.value || "Gurugram";
  const carType = document.getElementById("heroCarType")?.value || "all";
  
  currentCategory = carType;
  const pillBtn = document.querySelector(`.pill-btn[data-category="${carType}"]`);
  if (pillBtn) {
    document.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
    pillBtn.classList.add("active");
  }

  renderFleetCards();
  const fleetSection = document.getElementById("fleetSection");
  if (fleetSection) {
    fleetSection.scrollIntoView({ behavior: "smooth" });
  }
  showToast(`Showing available cars in ${location}`, "info");
}

/**
 * FivePS Styled Accordion FAQ Toggle
 */
function toggleFaq(buttonEl) {
  const item = buttonEl.closest('.faq-accordion-item');
  if (!item) return;

  const isOpen = item.classList.contains('active');
  const allItems = document.querySelectorAll('.faq-accordion-item');

  allItems.forEach(el => {
    el.classList.remove('active');
    const icon = el.querySelector('.faq-toggle-icon');
    if (icon) {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  });

  if (!isOpen) {
    item.classList.add('active');
    const icon = item.querySelector('.faq-toggle-icon');
    if (icon) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  }
}

/**
 * Get Dynamic Fleet (Base + Admin Custom Cars)
 */
function getStoredFleet() {
  const custom = localStorage.getItem("admin_custom_cars");
  if (custom) {
    try {
      const parsed = JSON.parse(custom);
      if (Array.isArray(parsed)) {
        return [...FLEET_DATA, ...parsed];
      }
    } catch (e) {
      console.error("Error reading admin_custom_cars:", e);
    }
  }
  return FLEET_DATA;
}

/**
 * Testimonials Carousel Engine
 */
let currentTestimonialIndex = 0;
let testimonialAutoTimer = null;

function initTestimonialsCarousel() {
  const track = document.getElementById("testimonialTrack");
  const dots = document.querySelectorAll(".testimonial-dot");
  if (!track) return;

  function updateSlide() {
    track.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
    dots.forEach((dot, idx) => {
      if (idx === currentTestimonialIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  window.goToTestimonial = function(index) {
    currentTestimonialIndex = index;
    updateSlide();
  };

  window.nextTestimonial = function() {
    const total = document.querySelectorAll(".testimonial-card-slide").length;
    currentTestimonialIndex = (currentTestimonialIndex + 1) % total;
    updateSlide();
  };

  window.prevTestimonial = function() {
    const total = document.querySelectorAll(".testimonial-card-slide").length;
    currentTestimonialIndex = (currentTestimonialIndex - 1 + total) % total;
    updateSlide();
  };

  if (testimonialAutoTimer) clearInterval(testimonialAutoTimer);
  testimonialAutoTimer = setInterval(() => {
    window.nextTestimonial();
  }, 6000);
}

/**
 * Scroll Observer for Rich Kinetic Animations
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-on-scroll, .reveal-fade-left, .reveal-fade-right");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/**
 * Admin Dashboard Engine
 */
function initAdminDashboard() {
  const tableBody = document.getElementById("adminFleetTableBody");
  if (!tableBody) return; // Not on admin page

  renderAdminCars();
}

function renderAdminCars() {
  const tableBody = document.getElementById("adminFleetTableBody");
  if (!tableBody) return;

  const fleet = getStoredFleet();
  const custom = JSON.parse(localStorage.getItem("admin_custom_cars") || "[]");
  const customIds = new Set(custom.map(c => c.id));

  // Update Stats
  const totalFleetEl = document.getElementById("statTotalFleet");
  const customFleetEl = document.getElementById("statCustomCars");
  if (totalFleetEl) totalFleetEl.textContent = fleet.length;
  if (customFleetEl) customFleetEl.textContent = custom.length;

  tableBody.innerHTML = fleet.map(car => `
    <tr>
      <td>
        <img src="${car.image}" alt="${car.name}" class="admin-car-thumb" onerror="this.src='images/grand-vitara.jpg'">
      </td>
      <td>
        <strong>${car.name}</strong><br>
        <span style="font-size:0.75rem;color:var(--text-muted);">${car.modelYear || '2024'} • ${car.categoryName || car.category}</span>
      </td>
      <td>
        <strong style="color:var(--brand-amber);">₹${car.pricePerDay.toLocaleString('en-IN')}</strong> /day
      </td>
      <td>
        <span style="font-size:0.8rem;background:#f1f5f9;padding:4px 8px;border-radius:6px;font-weight:700;">${car.transmission}</span>
      </td>
      <td>
        <span class="status-indicator-pill" style="padding:2px 10px;font-size:0.7rem;">
          <span class="live-dot"></span> Available
        </span>
      </td>
      <td>
        ${customIds.has(car.id) ? `
          <button class="btn-admin-action btn-admin-delete" onclick="deleteAdminCar('${car.id}')">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        ` : `
          <span style="font-size:0.75rem;color:var(--text-muted);font-weight:600;">System Fleet</span>
        `}
      </td>
    </tr>
  `).join("");
}

function handleAddCarSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("adminCarName").value.trim();
  const category = document.getElementById("adminCarCategory").value;
  const price = parseInt(document.getElementById("adminCarPrice").value, 10);
  const transmission = document.getElementById("adminCarTrans").value;
  const fuel = document.getElementById("adminCarFuel").value;
  const seats = document.getElementById("adminCarSeats").value;
  const image = document.getElementById("adminCarImg").value.trim() || "images/grand-vitara.jpg";

  if (!name || !price) {
    showToast("Please fill in car name and price", "error");
    return;
  }

  const categoryNames = {
    "suv": "Mid SUV",
    "offroad": "4x4 Offroad",
    "luxury": "Luxury 7-Seater",
    "compact-suv": "Compact SUV",
    "hatchback": "Premium Hatchback"
  };

  const newCar = {
    id: "admin-" + Date.now(),
    name: name,
    modelYear: "2025 Model",
    pricePerDay: price,
    category: category,
    categoryName: categoryNames[category] || "Luxury Vehicle",
    transmission: transmission,
    fuel: fuel,
    seats: seats,
    mileage: "16.5 km/l",
    badge: "Newly Added",
    badgeType: "gold",
    image: image,
    features: ["Sunroof", "Touchscreen Display", "Bluetooth", "Push Start"],
    deposit: 3000,
    freeKms: "300 km/day",
    popular: true
  };

  const custom = JSON.parse(localStorage.getItem("admin_custom_cars") || "[]");
  custom.push(newCar);
  localStorage.setItem("admin_custom_cars", JSON.stringify(custom));

  document.getElementById("addCarForm").reset();
  showToast(`${name} added to Fleet!`, "success");
  renderAdminCars();
}

function deleteAdminCar(id) {
  let custom = JSON.parse(localStorage.getItem("admin_custom_cars") || "[]");
  custom = custom.filter(c => c.id !== id);
  localStorage.setItem("admin_custom_cars", JSON.stringify(custom));
  showToast("Vehicle removed from Fleet", "info");
  renderAdminCars();
}

// Global DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTestimonialsCarousel();
  initScrollAnimations();
  initAdminDashboard();
});

