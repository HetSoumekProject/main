const orm=require("../../database/orm")


const bidOnAcar=async (req,res)=>{
    console.log("hello",req.body)
    try{
        let highest= await orm.Bid.findAll({
            where:{carId:req.body.carId}
        })
        console.log(highest)
        if(highest[highest.length-1].amount<req.body.amount){
        let result=await orm.Bid.create({carId:req.body.carId,userId:req.body.userId,
            amount:req.body.amount})
        res.send(result)}
        else{
            res.send("can't bid less than the last bid")
        }
    }catch(err){
        res.send(err)
    }
}
const getAllBids4aCar=async (req,res)=>{
    try{
        let result= await orm.Bid.findAll({
            where:{carId:req.params.carId}
        })
        res.json(result)
    }catch(err){
        res.json(err)
    }
}
const getTheHighestBidOnCar= async(req,res)=>{
    console.log(req.params.carId)
    try{
        let result= await orm.Bid.findAll({
            where:{carId:req.params.carId}
        })
        if(result.length>0){
        res.json(result[result.length-1])}
        else{
            res.json(0)
        }
    }catch(err){
        res.json(err)
    }
}


const placeAbid=async (req,res)=>{
    console.log("this is the req.body",req.body)
    try{
        let result= await orm.Bid.create({
            carId:req.body.carId,userId:req.body.userId,
            amount:req.body.amount,
        })
        // console.log(result);
        let current_car= await orm.Car.findByPk(req.body.carId,{include:[{ model: orm.Bid,
         
         }]})
         
         
        console.log(current_car);
        

        res.send(result)
    }catch(err){
        res.json(err)
    }
}
module.exports={
    getAllBids4aCar,bidOnAcar,getTheHighestBidOnCar,placeAbid
}