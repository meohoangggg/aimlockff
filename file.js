// ---------------------------
// myscript.js
// Dành cho Shadowrocket Module Free Fire
// ---------------------------

// ---- Chỗ bạn điền Base64 ----
let myBase64 = "NmRkNjkwNmE0ZGIzNjQ1MGE2Y2NjMGY2Y2Q4N2EwZTIyYmZmMDIzYzIxMzk1MDMxYWEzNTNjNWM3ODQxMWM4NTk1NWZhYTQ2MjE4N2VlOTA2MWRmMWVlOTA1MTE4MGRhODU4NTgxNTBkNTk3NjE1MzgxNThmYzJjNmNkYmZhZGU";

// Giải mã Base64 thành chuỗi
try {
    let decoded = atob(myBase64);
    console.log("Decoded Base64:", decoded);

    // TODO: Xử lý tiếp dữ liệu decoded ở đây nếu muốn
    // Ví dụ: parse JSON, thay đổi request, log thông tin...
} catch (e) {
    console.log("Lỗi decode Base64:", e);
}

// Hàm kiểm tra module đã load
console.log("Shadowrocket Free Fire Script Loaded");






