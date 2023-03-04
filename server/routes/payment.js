
const express = require('express');
const {Add,Verify} =require('../controller/payment.js')
const Router = express.Router();

 Router.post('/payment',Add)
 Router.post('/payment/:id',Verify)

module.exports=Router;