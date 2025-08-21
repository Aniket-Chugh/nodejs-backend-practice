const cluster = require("cluster");
const os = require("os");
const path = require("path");
const { execFile } = require("child_process");

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master process is running. PID: ${process.pid}`);
    console.log(`Forking ${numCPUs} worker(s)...`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Code: ${code}, Signal: ${signal}`);
        console.log("Starting a new worker...");
        cluster.fork();
    });
} else {
    // Worker process
    const express = require("express");
    const app = express();

    app.get("/", (req, res) => {
        console.log(path.join(__dirname, "child_process", "spawn.js"));

        execFile("node", [spawnPath], (error, stdout, stderr) => {
            if (error) {
                console.error("Error:", error);
                return res.status(500).send("Something went wrong!");
            }
            res.send(`<pre>${stdout}</pre>`);
        });
    });

    const PORT = 3005;
    app.listen(PORT, () => {
        console.log(`Worker PID ${process.pid} listening on port ${PORT}`);
    });
}
