import os
import subprocess

try:
    import cv2
    video_path = r"C:\Users\hp\Downloads\nexuxlab_ssspin.io_1791523703.mp4"
    out_dir = r"c:\Users\hp\OneDrive\Documents\car rentals\ref_frames"
    os.makedirs(out_dir, exist_ok=True)
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS) or 30
    count = 0
    frame_idx = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret or count > 20:
            break
        if frame_idx % max(1, int(fps * 1.0)) == 0:
            cv2.imwrite(os.path.join(out_dir, f"frame_{count:03d}.jpg"), frame)
            count += 1
        frame_idx += 1
    cap.release()
    print(f"Extracted {count} frames using OpenCV")
except Exception as e:
    print("Error:", e)
