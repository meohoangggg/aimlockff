// ---------------------------
// myscript.js
// Dành cho Shadowrocket Module Free Fire
// ---------------------------

// ---- Chỗ bạn điền Base64 ----
let myBase64 = "ZjkwN2MwNDRjNGJiODZiZjVkNzVlNzQzMGM3NzdkN2U4MTI5ZjlmNGE2ZGQ5MmU2OTc4YWNkYzhkMzMxZmE5MTQyMzIyYmUyZjJiMGQwOTE1ZDJlMDQwZTdiZjE4ZDUwYjZhN2FjM2FlNGJkZWJhN2Y5NDgyNTQxMjZkMTFjMzI";

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




