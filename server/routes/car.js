const express = require('express');
const router = express.Router();


const carcontrol=require("../controller/car.controller")


router.post("/postACar/:id",carcontrol.createAcar)
router.get("/AllCars",carcontrol.getAllCars)
router.post("/AllCarsByCondition",carcontrol.getCarsByCondition)






module.exports=router