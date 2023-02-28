const express = require("express");
const cors = require ("cors")
const db = require('../database/orm/index');
const router = require("./routes.js");
const app = express();
const PORT = process.env.PORT || 3000


const carsRoute = require('./routes/car.js')
const usersRoute = require('./routes/car.js')
const roomsRoute = require('./routes/car.js')
const bidsRoute = require('./routes/car.js')
const messagesRoute = require('./routes/car.js')
const notifivationsRoute = require('./routes/car.js')





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




app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
