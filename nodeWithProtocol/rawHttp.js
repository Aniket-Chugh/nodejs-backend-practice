const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    // 1. Basic CORS headers (Must)
    // -------------------------------
    res.setHeader("Access-Control-Allow-Origin", "*");
    // or specific origin:
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    const log = `${Date.now()} : ${req.url} new Req Received\n `;
    fs.appendFile("httpLog.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                return res.end("hello from homePage")
                break;

            case "/about":
                return res.end("I am Aniket chugh")
                break;

            default:
                return res.end("404 not found")
                break;
        }
    });
});


myServer.listen(8000, () => {
    console.log("server is running");

});
