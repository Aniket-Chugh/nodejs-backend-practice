const cluster = require("cluster");
const os = require("os");

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master process running. PID: ${process.pid}`);
    console.log(`Forking ${numCPUs} workers...`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    });

} else {
    const express = require("express");
    const app = express();

    app.get("/heavy", (req, res) => {
        function fibonacci(n) {
            return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
        }

        const num = 40;
        const result = fibonacci(num);

        res.send(`Worker ${process.pid} calculated Fibonacci(${num}) = ${result}`);
    });

    app.get("/", (req, res) => {
        res.send(`Hello from Worker ${process.pid}`);
    });

    const PORT = 3005;
    app.listen(PORT, () => {
        console.log(`Worker PID ${process.pid} listening on port ${PORT}`);
    });
}
