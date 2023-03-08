const orm=require("../../database/orm")


const bidOnAcar=(req,res)=>{
    try{
        let highest=orm.Bid.findAll({
            where:{carId:req.body.carId}
        })
        if(highest[highest.length-1].amount<req.body.amount){
        let result=orm.Bid.create(req.body)
        res.send(result)}
        else{
            res.json("can't bid less than the last bid")
        }
    }catch(err){
        res.send(err)
    }
}
const getAllBids4aCar=(req,res)=>{
    try{
        let result=orm.Bid.findAll({
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
        res.json(result)
    }catch(err){
        res.json(err)
    }
}
module.exports={
    getAllBids4aCar,bidOnAcar,getTheHighestBidOnCar,placeAbid
}