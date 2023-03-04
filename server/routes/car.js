const express = require('express');
const router = express.Router();


const carcontrol=require("../controller/car.controller")


router.post("/postACar/:id",carcontrol.createAcar)
router.get("/AllCars",carcontrol.getAllCars)

router.put("/status/approve/:id",carcontrol.approveCar)
router.put("/status/decline/:id",carcontrol.declineCar)
router.get("/allPending",carcontrol.getAllCars4admin)
router.post("/seller/:id",carcontrol.getTheSeller)


module.exports=router