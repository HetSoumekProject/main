const orm=require("../../database/orm")

// Create a new favourite
let createFavourite = (req, res) => {
  const  userId  = req.params.id;
  const carId = req.body.carId;
  console.log("userId",userId);
  console.log("carId",carId);
  orm.User.findByPk(userId)

    .then(user => {
      if (!user) {
        
        return res.status(404).send({ message: `User with id ${userId} not found` });
      }

      
      orm.Favourite.create({
        userId: userId,
        carId : carId
      })
        .then(favourite => {
          res.send(favourite);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

//get all favourites for user 
 let getFavouritesForUser = (req, res) => {
  const { userId } = req.params;

  
  orm.User.findByPk(userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: `User with id ${userId} not found` });
      }

      
      Favourite.findAll({
        where: { userId: userId }
      })
        .then(favourites => {
          res.send(favourites);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
module.exports={
    createFavourite,
    getFavouritesForUser
  }