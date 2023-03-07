const express = require('express');
const router = express.Router();


const usercontrol=require("../controller/user.controller")



router.get("/userbyuid/:uid",usercontrol.getuserbyuid)
router.post("/AddUser",usercontrol.addUser)
router.get("/getallusers",usercontrol.getAllUsers)


module.exports=router