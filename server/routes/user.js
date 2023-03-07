const express = require('express');
const router = express.Router();


const usercontrol=require("../controller/user.controller")



router.get("/userbyuid/:uid",usercontrol.getuserbyuid)
router.post("/AddUser",usercontrol.addUser)
router.delete("/deleteOneUser/:id",usercontrol.deleteOneUser)
router.put("/updateOneUser/:id",usercontrol.updateOneUser)
router.get("/allusers",usercontrol.getAllUsers)
router.get("/:id",usercontrol.getOneUser)


module.exports=router