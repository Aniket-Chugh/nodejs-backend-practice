import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", (socket) => {
  console.log("User connected");

  // Event-based communication
  socket.on("sendMsg", (msg) => {
    io.emit("receiveMsg", msg);
  });
});
