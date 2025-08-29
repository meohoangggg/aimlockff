// ---------------------------
// myscript.js
// Dành cho Shadowrocket Module Free Fire
// ---------------------------

// ---- Chỗ bạn điền Base64 ----
let myBase64 = "MTA3ZTFlMmFlMmNlM2RmY2NlYjMwZGRhZTA0YTRmOTM0Y2JlODNmNDY3M2QzYTlmZWFjYzU1MmIwZDdmYjA0ZjhhZDkzMjVkNTNmMzI3ODdmZjczNThmOWFmNTBjOTMxNDc4YmMzMmQ4NDAyMDY5NTk5YmRlMmNmYTg5M2FlZTc";

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



