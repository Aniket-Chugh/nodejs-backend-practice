const express = require("express");
const { spawn } = require("child_process");

const app = express();

app.get("/dir", (req, res) => {
    const ls = spawn("cmd.exe", ["/c", "dir", "C:\\Users\\hp\\Desktop"]);

    let output = "";

    ls.stdout.on("data", (data) => {
        output += data.toString();
    });

    ls.stderr.on("data", (data) => {
        output += "Error: " + data.toString();
    });

    ls.on("close", (code) => {
        res.send(`<pre>${output}</pre>`);
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3003");
});
