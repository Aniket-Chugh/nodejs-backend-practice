const net = require("net");

const server = net.createServer((socket) => {

    console.log("client connected");

    // TCP allows full-duplex communication
    socket.write("hello via tcp")

    // Handle incoming data streams
    socket.on('data', (data) => {
        console.log("recieved data : " + data.toString());

    })


    socket.on('end', () => {
        console.log('Client disconnected.');
    });

    // 2. Handle Errors (CRITICAL for production)

    socket.on('error', (err) => {
        console.log("this is the error happening : ", err);

    })

})


server.listen(8080, () => {
    console.log('TCP Server listening on port 8080');
});
