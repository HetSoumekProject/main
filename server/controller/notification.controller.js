const orm=require("../../database/orm")
   
let getNotification=async(req,res)=>{
    try{
      let notifyy=await orm.Notification.findAll({where: {UserId:req.params.id},
        order: [ [ 'createdAt', 'DESC' ]]}
        )
      res.send(notifyy)
    }catch(err){
      res.send(err)
    }
  }
  module.exports={
    getNotification
  
  }