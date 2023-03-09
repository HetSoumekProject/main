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
        // constallMessages= await or
      try{
     
      }catch(err){
    
      }

  }




  
  module.exports={
    createMessage,getAllMessagesForOneCar
    
  }