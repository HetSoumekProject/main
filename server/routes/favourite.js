const express = require('express');
const router = express.Router();

const favourite=require('../controller/favourite.controller')



router.post('/addfav/:id',favourite.createFavourite)
router.get('/checkfav/:id',favourite.getFavouritesForUser)

module.exports=router