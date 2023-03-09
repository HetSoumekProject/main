const orm=require("../../database/orm")
  let createMessage=async (req,res)=>{
    try{
        const newMessage= await orm.Message.create(req.body)
        res.status(201).send(newMessage)
    }catch(err){
        res.send(err)
    }
  }
    let getAllMessagesForOneCar = async (req, res) => {
      console.log(req.params);
      try{
        const getMessage=await orm.Message.findAll({where:{carId:req.params.id}})
res.send(getMessage)
console.log(res)
      }catch(err){
        res.send(err)
      }

  }

  module.exports={
    createMessage,getAllMessagesForOneCar
    
  }