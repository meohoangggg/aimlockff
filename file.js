
function customCode() {
// aimlock.js
// JS thuần tính toán hướng aimlock từ súng vào mục tiêu 3D

// Vị trí súng/camera
let gun = { x: 0, y: 0, z: 0 };

// Mục tiêu (ví dụ)
let targets = [
    { x: 5, y: 2, z: -3 },
    { x: -2, y: 1, z: -4 }
];

// Hàm tính vector hướng
function getDirection(from, to) {
    let dx = to.x - from.x;
    let dy = to.y - from.y;
    let dz = to.z - from.z;
    let length = Math.sqrt(dx*dx + dy*dy + dz*dz);
    return { x: dx/length, y: dy/length, z: dz/length };
}

// Hàm tính yaw/pitch từ vector
function computeYawPitch(dir) {
    let yaw = Math.atan2(dir.x, dir.z);       // xoay ngang
    let pitch = Math.asin(-dir.y);            // xoay dọc
    return { yaw, pitch };
}

// Chọn mục tiêu gần nhất
function getClosestTarget(from, targets) {
    let minDist = Infinity;
    let closest = null;
    for (let t of targets) {
        let dx = t.x - from.x;
        let dy = t.y - from.y;
        let dz = t.z - from.z;
        let dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < minDist) {
            minDist = dist;
            closest = t;
        }
    }
    return closest;
}

// Tính toán aimlock
function aimlock(gun, targets) {
    let target = getClosestTarget(gun, targets);
    if (!target) return null;
    let dir = getDirection(gun, target);
    let rotation = computeYawPitch(dir);
    return { target, rotation };
}

// Demo: in kết quả
let result = aimlock(gun, targets);
if (result) {
    console.log("Mục tiêu:", result.target);
    console.log("Yaw (rad):", result.rotation.yaw.toFixed(3));
    console.log("Pitch (rad):", result.rotation.pitch.toFixed(3));
}

}

// -------------------------------
// 2️⃣ Xử lý HTTP response
// -------------------------------
(function() {
    // Lấy dữ liệu gốc từ response
    let body = $response.body;

    // Chạy code JS do bạn thêm
    try {
        customCode();
    } catch (err) {
        console.log("[Custom JS Error]", err);
    }

    // Trả lại dữ liệu gốc (bắt buộc)
    $done({ body: body });
})();
