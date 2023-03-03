const orm=require("../../database/orm")



 let addUser= async (req, res) => {
  const user={}
    user.first_name=req.body.first_name,
     user.last_name=req.body.last_name,
     user.firebase_id=req.body.firebase_id,
     user.firebase_email=req.body.firebase_email,
     user.email=req.body.email,
     user.password=req.body.password,
     user.role=req.body.role,
     user.phone_number=req.body.phone_number
  
    try {
      const usser = await orm.User.create(user);
      res.status(201).json(usser);
    } catch (error) {
      console.log(error);
      // res.status(500).send(error);
    }
 }
  module.exports={
    addUser
     
  }