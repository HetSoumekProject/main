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
const notifivationsRoute = require('./routes/car.js')
const favouriteRoute = require('./routes/favourite.js')
const paymentRoute = require('./routes/payment.js')
const messagesRoute = require('./routes/message.js')
const nodemailer = require('nodemailer');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/car', carsRoute);
app.use('/api/user', usersRoute);
app.use('/api/room', roomsRoute);
app.use('/api/bids', bidsRoute);


app.use('/api/notifications', notifivationsRoute);
app.use('/api/message', messagesRoute);
app.use('/api',paymentRoute)
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001", //where react run
    methods:["get", "post"]
  }
});
io.on("connection", (socket) => {
  // console.log(`User Connected: ${socket.id}`);
  socket.on("join_room", (data) => {
    socket.join(data);
  });
  socket.on("send_message", (data) => {
    console.log("messsage",data)
    io.to(data.carId).emit("receive_message", data);
  });
  var notifications=[]
  socket.on("notification", (data) => {
    console.log("Received notification:", data);
    notifications.push(data);
    io.emit("new_notification", data);
  });
  socket.on('bid&&price', (data) => {
    io.emit("bid&&price",data);
  });
});



// let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: process.env.MAIL_USERNAME,
//         pass: process.env.MAIL_PASSWORD,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN
//       }
//     });
// const sendEmail=(req, res) =>{
//   return new Promise((resolve,reject)=>{

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: "farhani ahlem",
      pass: "mynewpassword123@",
      clientId: "911348413388-bcp6gsrht6adpkfv85l6ql8972b6h314.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "https://oauth2.googleapis.com/token"}
    
  })


  let mailOptions = {
    from: req.body.email,
    to: "ahlemfarhani2@gmail.com",
    subject: 'Nodemailer Project',
    html:"hjjjjjj"
    
  };
 
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });


app.get("/api/notifications", (req, res) => {
  res.json(notifications);

});


server.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});
