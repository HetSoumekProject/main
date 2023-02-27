
const orm=require("../../database/orm")
var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'dzljqafly', 
    api_key: '759392656761466', 
    api_secret: '9pYCbLJHNEY33IJU_l6JcxWI3c4' 
  });


  let createAcar=async (req,res)=>{
    let car={}
    
    car.body_style=req.body.bodyStyle
    car.transmission=req.body.transmission
    car.year=req.body.year
    car.initial_price=req.body.initialPrice
    car.description=req.body.description
    car.brand_name=req.body.brandName
    car.userId=req.params.id
    car.status="pending"
    try{
        let result=await cloudinary.uploader.upload(req.body.image, function(result) { 
        });
        car.images=result.secure_url
        let rs=await orm.Car.create(car)
        console.log(rs)
        res.send(rs)
    }catch(err){
        res.send(err)
    }
  }


  module.exports={
    createAcar
  }