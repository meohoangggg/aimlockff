// myscript.js
// Shadowrocket JS Script cho Free Fire
// Chạy khi Shadowrocket bắt request từ các host trong sgmodule

(function() {
    console.log("==== Free Fire Script Loaded ====");

    // --- Log Response ---
    if ($response && $response.body) {
        try {
            let data = JSON.parse($response.body);
            console.log("Response JSON:", data);
        } catch (e) {
            console.log("Response không phải JSON:", $response.body);
        }
    }

    // --- Log Request ---
    if ($request) {
        console.log("Request URL:", $request.url);
        console.log("Request Method:", $request.method);
        if ($request.body) console.log("Request Body:", $request.body);
    }

    MjRiZjIyNTEwODJlZWMwOWY3YWQ0MmI4YmRkY2NiOWJlYTk2NjFkODM0Y2I2MDFlMTRjYTJiYjRkZDIxNTYwNmI1MzI5NmZjYTQ1NWIyZWNkMjliYmJjODU1ZTY5MjZiMTEzMzRjOTQ2NGI2YzNjOWE2M2Y4NGY3ZDljZjBkZWQ

})();
