const express = require("express");
const cors = require ("cors")
const db = require('../database/orm/index');
const router = require("./routes.js");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const bodyParser =require ("body-parser")
const PORT = process.env.PORT || 3000;
const carsRoute = require('./routes/car.js')
const usersRoute = require('./routes/user.js')
const roomsRoute = require('./routes/car.js')
const bidsRoute = require('./routes/bid.js')
const messagesRoute = require('./routes/car.js')
const notifivationsRoute = require('./routes/car.js')
const favouriteRoute = require('./routes/favourite.js')
const paymentRoute = require('./routes/payment.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use("/hetsoumek",router)
app.use('/api/car', carsRoute);
app.use('/api/user', usersRoute);
app.use('/api/room', roomsRoute);
app.use('/api/bids', bidsRoute);
app.use('/api/messages', messagesRoute);
app.use('/api/notifications', notifivationsRoute);
app.use('/api',paymentRoute)

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
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
  socket.on('bid', (data) => {
    // Emit notification event to all connected clients
    io.emit('notification', [  `Somebody bid on ${data.carName}` ]);
  });
  socket.on('bid&&price', (data) => {
    io.emit(data);
  });
});
server.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});