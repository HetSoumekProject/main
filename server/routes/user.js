const express = require('express');
const router = express.Router();


const usercontrol=require("../controller/user.controller")
router.post("/AddUser",usercontrol.addUser)


module.exports=router