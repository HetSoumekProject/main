const express = require('express');
const router = express.Router();
 
const favourite=require('../controller/favourite.controller')

router.post('/addfav/:userId/:carId',favourite.createFavourite)
router.get('/checkfav/:userId',favourite.getFavouritesForUser)
router.delete('/deletefav/:userId/:carId',favourite.deleteFav)
module.exports=router