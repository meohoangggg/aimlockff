// ---------------------------
// myscript.js
// Dành cho Shadowrocket Module Free Fire
// ---------------------------

// ---- Chỗ bạn điền Base64 ----
let myBase64 = "MjRiZjIyNTEwODJlZWMwOWY3YWQ0MmI4YmRkY2NiOWJlYTk2NjFkODM0Y2I2MDFlMTRjYTJiYjRkZDIxNTYwNmI1MzI5NmZjYTQ1NWIyZWNkMjliYmJjODU1ZTY5MjZiMTEzMzRjOTQ2NGI2YzNjOWE2M2Y4NGY3ZDljZjBkZWQ";

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
