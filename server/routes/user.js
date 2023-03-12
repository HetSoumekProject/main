const express = require('express');
const router = express.Router();


const usercontrol=require("../controller/user.controller")



router.get("/userbyuid/:uid",usercontrol.getuserbyuid)
router.post("/AddUser",usercontrol.addUser)
// router.get("/getallusers",usercontrol.getAllUsers)
router.patch("/updateuserprofile/:uid",usercontrol.updateuserprofile)
router.patch("/uploadimg/:uid",usercontrol.uploadimg)
router.delete("/deleteOneUser/:id",usercontrol.deleteOneUser)
router.put("/updateOneUser/:id",usercontrol.updateOneUser)
router.get("/allusers",usercontrol.getAllUsers)
router.get("/:id",usercontrol.getOneUser)
router.get("/real/:id",usercontrol.getRealId)
router.get("userid/:uid",usercontrol.getid)


module.exports=router