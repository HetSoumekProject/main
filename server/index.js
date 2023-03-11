const express = require("express");
const cors = require ("cors")
const orm = require('../database/orm/index');
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
const notifivationsRoute = require('./routes/notification.js')
const favouriteRoute = require('./routes/favourite.js')
const paymentRoute = require('./routes/payment.js')
const messagesRoute = require('./routes/message.js')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use("/hetsoumek",router)
app.use('/api/car', carsRoute);
app.use('/api/user', usersRoute);
app.use('/api/room', roomsRoute);
app.use('/api/bids', bidsRoute);
// app.use('/api/messages', messagesRoute);
app.use('/api/notifications', notifivationsRoute);
app.use('/api/message', messagesRoute);

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
  // console.log(`User Connected: ${socket.id}`);
  socket.on("join_room", (data) => {
    socket.join(data);
  });
  socket.on("send_message", (data) => {
    io.to(data.room).emit("receive_message", data);
  });
  // var notifications=[]
  socket.on("notification", async(note) => {
    
      console.log('this is server notification',note)
      try{

        let current_user=await orm.User.findByPk(note.userId)
        let current_car= await orm.Car.findByPk(note.carId,{include:[{ model: orm.Bid,
        }]})
        if (current_car){
          const usersId =current_car.bids.map(e=>e.userId).filter((e)=>{return e!==note.userId })
          let uniqueId = [...new Set(usersId )];
      console.log(uniqueId)
         uniqueId.forEach(async(e)=>{

             try{        
              const obj = {
                carId:note.carId,
                userId:e,
                bidder_id:note.userId,
                brand_name:current_car.brand_name,
                bidder_name:current_user.first_name,
                added_bid:note.amount
            } 
                 const notify= await orm.Notification.create(obj)
                 
                 io.emit(`notification/${e}`, obj);
                 
                    console.log('notify',notify);
             }catch(err){
       console.log(err);
         }

       
         })
          
  }
      }catch(err){
console.log(err);
      }
       
  });
  socket.on('bid&&price', (data) => {
    
    io.emit("bid&&price",data);
  });
});

// app.get("/api/notifications", (req, res) => {
//   res.json(notifications);
// });
server.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});