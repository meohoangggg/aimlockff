// ---------------------------
// myscript.js
// Dành cho Shadowrocket Module Free Fire
// ---------------------------

// ---- Chỗ bạn điền Base64 ----
let myBase64 = "Yzk5ODQ1MDA2MmExNzdhM2Y2MGRmNDI2ZWVjMDYxOGUzNjMxYzNkYjEyYzViM2RiMTg0MWMxNTBlZGQ2OGY1OTk1MWJiNjFjZmU0YWI3MWUzMTBhNTlkYjdmNDM3MzY3NWMzNjIzMzkyOTcwZTNiNTUzZDYyNGRiYTQyNTk5YTk";

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





