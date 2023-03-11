const express = require('express');
const router = express.Router();


const carcontrol=require("../controller/notification.controller")


router.get("/AllNotifications/:id",carcontrol.getNotification)

module.exports=router