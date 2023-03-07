const express = require('express');
const router = express.Router();


const bidController=require("../controller/bid.controller")


router.get("/:carId",bidController.getTheHighestBidOnCar)
router.post("/bid",bidController.bidOnAcar)
router.post("/placeabid",bidController.placeAbid)

module.exports=router
