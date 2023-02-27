const router=require("express").Router()
const carcontrol=require("./controller/car.controller")

router.post("/postACar/:id",carcontrol.createAcar)

module.exports=router