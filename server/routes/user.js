const express = require('express');
const router = express.Router();


const usercontrol=require("../controller/user.controller")
router.post("/AddUser",usercontrol.addUser)
router.post("/deleteOneUser/:id",usercontrol.deleteOneUser)
router.post("/updateOneUser/:id",usercontrol.updateOneUser)
router.get("/:id",usercontrol.getOneUser)
router.get("/getallusers",usercontrol.getAllUsers)


module.exports=router