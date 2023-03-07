const orm=require("../../database/orm")



let getuserbyuid= async (req, res) => {
  try {
    const userbyuid = await orm.User.findOne({ where: { firebase_id: req.params.uid } })
    res.send(userbyuid)
  }
  catch(error){
    res.status(500).send(error);
  }
 }

 let addUser= async (req, res) => {
  const user={}
    user.first_name=req.body.first_name,
     user.last_name=req.body.last_name,
     user.firebase_id=req.body.firebase_id,
     
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
 
 
 let getAllUsers=  async (req, res) => {
    try {
      const users = await orm.User.findAll({
        
      });
      res.status(200).json(users);
      console.log(users);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  let getOneUser= async (req, res) => {
    try {
      const user = await orm.User.findByPk(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
   

   
   
  module.exports={
    addUser,
    
    
    
    getAllUsers,
    getuserbyuid
     
  }