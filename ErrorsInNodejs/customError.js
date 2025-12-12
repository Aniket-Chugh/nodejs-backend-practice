
class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

function testFunction() {
    throw new ApiError("Invalid token", 401);
}

try {
    testFunction();
} catch (err) {
    console.log("🔥 ERROR CAUGHT");
    console.log("Message:", err.message);
    console.log("Status:", err.status);
    console.log("Stack:", err.stack);
}
