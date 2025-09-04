// ---------------------------
// myscript.js
// Dành cho Shadowrocket Module Free Fire
// ---------------------------

// ---- Chỗ bạn điền Base64 ----
let myBase64 = "4D 6A 63 77 59 6A 49 31 4E 7A 4D 7A 4E 32 52 6A 4D 54 5A 6D 5A 6A 6B 32 4E 6A 4D 32 5A 57 5A 6B 59 6D 59 34 4D 44 4D 32 4E 6A 6B 79 4E 44 64 69 4D 54 49 30 4E 6D 45 7A 5A 6A 46 6A 4F 57 4E 68 59 32 59 79 4D 7A 52 6D 5A 44 68 68 4D 54 51 31 5A 47 51 30 59 6D 46 6B 59 6A 64 6B 4E 6A 41 78 4D 6D 46 6D 4E 6A 68 68 59 54 52 69 4D 32 4A 6C 59 32 49 77 4D 47 46 68 4E 47 4E 6D 4E 57 4D 35 5A 47 5A 68 4D 44 6B 31 4E 32 59 77 4D 7A 67 32 4E 6A 68 6C 4D 54 42 6C 4E 57 49 77 4E 7A 51 34 4D 54 46 6B 4E 47 49 77 4D 57 49";

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








