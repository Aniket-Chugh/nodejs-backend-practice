const express = require("express");
const { exec } = require("child_process")
const app = express();

app.get('/info', (req, res) => {
    exec('systeminfo', (error, stdout, stderr) => {
        if (error) {
            return res.send(`Error: ${error.message}`);
        }
        res.send(`<pre>${stdout}</pre>`);
    });
});




app.listen(3000);
