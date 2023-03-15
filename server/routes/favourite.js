const express = require('express');
const router = express.Router();
 
const favourite=require('../controller/favourite.controller')

router.post('/addfav/:userId/:carId',favourite.createFavourite)
router.delete('/deletefav/:userId/:carId',favourite.deleteFav)

router.get('/checkfav/:userId',favourite.getFavouritesForUser)
module.exports=router