// ---------------------------
// myscript.js
// Dành cho Shadowrocket Module Free Fire
// ---------------------------

// ---- Chỗ bạn điền Base64 ----
let myBase64 = "ZDQyNWQ1MWI2OTlkYWIyMGZmY2YwYjcyNjgwMWExOWRkODFhZDAwOWMyMWFmNmI0NjRhNGYzNmNmYmIzNTJmNzZmYzAxMGNkZmJjZGNmNzIyZjg5NDQ1Y2NlMTY2NGI5NWMwZTMwZGUzODY4NjU3YWE0N2UzOTkyOWVjOGRlOTY";

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

