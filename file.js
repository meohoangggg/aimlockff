// ---------------------------
// myscript.js
// Dành cho Shadowrocket Module Free Fire
// ---------------------------

// ---- Chỗ bạn điền Base64 ----
let myBase64 = "MjcwYjI1NzMzN2RjMTZmZjk2NjM2ZWZkYmY4MDM2NjkyNDdiMTI0NmEzZjFjOWNhY2YyMzRmZDhhMTQ1ZGQ0YmFkYjdkNjAxMmFmNjhhYTRiM2JlY2IwMGFhNGNmNWM5ZGZhMDk1N2YwMzg2NjhlMTBlNWIwNzQ4MTFkNGIwMWI";

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







