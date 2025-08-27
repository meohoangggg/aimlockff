// ===============================
// Shadowrocket JS Script - Template với chỗ chạy code tùy chỉnh
// ===============================

// ----- 1️⃣ Chỗ điền code JS tùy chỉnh -----
function customCode() {
   MjRiZjIyNTEwODJlZWMwOWY3YWQ0MmI4YmRkY2NiOWJlYTk2NjFkODM0Y2I2MDFlMTRjYTJiYjRkZDIxNTYwNmI1MzI5NmZjYTQ1NWIyZWNkMjliYmJjODU1ZTY5MjZiMTEzMzRjOTQ2NGI2YzNjOWE2M2Y4NGY3ZDljZjBkZWQ
}

// ----- 2️⃣ Xử lý HTTP response -----
(function() {
    // Lấy dữ liệu gốc từ response
    let body = $response.body;

    // Chạy code JS tùy chỉnh
    try {
        customCode();
    } catch (err) {
        console.log("[Custom JS Error]", err);
    }

    // Trả lại dữ liệu gốc để Shadowrocket không bị lỗi
    $done({ body: body });
})();
