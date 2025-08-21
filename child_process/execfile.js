const { execFile } = require("child_process");
//basic syntaxx :
// execFile(file[, args][, options][, callback])

execFile("node", ["spawn.js"], (error, stdout, stderr) => {
    if (error) {
        console.error("Error code:", error.code);
        console.error("Signal:", error.signal);
        console.error("Stack:", error.stack);
        return;
    }
    console.log("Node version:", stdout);
});

// the terminal will get - node spawn.js

// the options can be have the folder where the file is or timeout etc -
//{
// cwd: "./scripts",              // folder where script is
// env: { NODE_ENV: "development" }, // environment variables
// timeout: 5000                  // kill if more than 5 sec
// }


//✅ Safe: no shell → prevents injection attacks. Unlike the exec in child process
