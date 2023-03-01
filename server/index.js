const express = require("express");
const cors = require("cors");
const db = require("../database/orm/index");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001", //where react run
    methods: ["get", "post"]
  }
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    io.to(data.room).emit("receive_message", data);
  });
});

server.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});
