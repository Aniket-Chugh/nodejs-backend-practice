import net from "net";

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
        console.log("Received:", data.toString());
        socket.write("Hello from TCP server!");
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });
});

server.listen(4000, () => {
    console.log("TCP Socket server on port 4000");
});
