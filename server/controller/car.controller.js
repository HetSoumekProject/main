
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
        let rslt=await cloudinary.uploader.upload(req.body.image, function(result) { 
        });
        let rs=await orm.Car.create(car)
        console.log(rs)
        let result=await orm.Image.create({
          image:rslt.secure_url,
          carId:rs.id
        })
        console.log(rs)
        res.send(rs)
    }catch(err){
        res.send(err)
    }
  }

    let getAllCars = async (req, res) => {
      try{
        let result=await orm.Car.findAll({where : {status:"approved"}, include: {
          model: orm.Image
        }})
        console.log(result)
        res.json(result)
      }catch(err){
        res.json(err)
      }
    
  }
  

  
  const approveCar=async (req,res)=>{
   
    try{
      let y=new Date().setDate(new Date().getDate()+7)
      let x=new Date()
      let b=new Date(y)
      let result= await orm.Car.update({
        starting_day: x,
        ending_day: b,
        status:"approved"},
       { where : {id:req.params.id}})
    res.status(200).send(result)
        }
catch(err){
   console.log(err)
  }
}
  const getAllCars4admin=async(req,res)=>{
    try{
    let result=await orm.Car.findAll({where : {status:"pending"}, include: {
      model: orm.Image
    }})
    console.log(result)
    res.json(result)
  }catch(err){
    res.json(err)
  }
  }
  const getTheSeller=async(req,res)=>{
    try{
      let result=await orm.User.find({where: {id:req.params.id}})
      res.send(result)
    }catch(err){
      res.send(err)
    }
  }
  const declineCar=async (req,res)=>{
    try{
      let result=await orm.Car.update(
        {status:"declined"},
        {where : {id:req.params.id}})
    res.send(result)
  }catch(err){
    res.send(err)
  }
}
  
  module.exports={
    createAcar,
    approveCar,getAllCars4admin,getTheSeller,declineCar,createAcar ,getAllCars  
  }