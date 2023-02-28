const express = require('express');
const router = express.Router();


const carcontrol=require("../controller/car.controller")


router.post("/postACar/:id",carcontrol.createAcar)


module.exports=router