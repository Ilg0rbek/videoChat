const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const io = new Server({
  cors: true,
});
const app = express();

app.use(bodyParser.json());

const eamilIdSocketMapping = new Map();

io.on("connection", (socket) => {
  console.log("New connection");

  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log(`User email id: ${emailId}    =>  User room id: ${roomId}`);

    eamilIdSocketMapping.set(emailId, socket.id);

    socket.join(roomId);
    socket.emit('joined-room', {roomId})
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });
});

app.listen(8000, () => {
  console.log("Http server running at PORT 8000");
});
io.listen(8001);
