const express = require('express');
const router = express.Router();


const carcontrol=require("../controller/car.controller")


router.post("/postACar/:id",carcontrol.createAcar)
router.get("/AllCars",carcontrol.getAllCars)
router.get("/carsofuser/:id",carcontrol.carsofuser)
router.put("/status/approve/:id",carcontrol.approveCar)
router.put("/status/decline/:id",carcontrol.declineCar)
router.get("/allPending",carcontrol.getAllCars4admin)
router.post("/seller/:id",carcontrol.getTheSeller)
router.get("/getAllCarsforuser/:id",carcontrol.getAllCarsforuser)
router.get("/getcarbyid/:id",carcontrol.getCarByid)
module.exports=router