import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
    console.log("WebSocket connected");

    socket.on("message", (message) => {
        console.log("Received:", message.toString());
        socket.send("Hello from WebSocket server!");
    });
});
