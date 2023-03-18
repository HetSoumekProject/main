const { User } = require("../../database/orm");
const orm = require("../../database/orm");

// Create a new favourite
let createFavourite = (req, res) => {
  const userId = req.params.userId;
  const carId = req.params.carId;
  console.log("userId", userId);
  console.log("carId", carId);
  orm.User.findByPk(userId)

    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .send({ message: `User with id ${userId} not found` });
      }

      orm.Favourite.create({
        userId: userId,
        carId: carId,
      })
        .then((favourite) => {
          res.status(200).send(favourite);
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//get all favourites for user
let getFavouritesForUser = (req, res) => {
  const userId = req.params.userId;
  orm.Favourite.findAll({
    where: { userId: req.params.userId },
    include: [{ model: orm.Car, as: "car" ,include:orm.Image}],
  })
    .then((favorites) => res.json(favorites))
    .catch((err) => {
      console.log("=============================================", err);
      res.json(err);
    });
};
let deleteFav = (req, res) => {
  const userId = req.params.userId;
  const carId = req.params.carId;
  console.log("=>>>>",userId);
  console.log("=>=>=>=>",carId);
  orm.Favourite.destroy({
    where: { userId: req.params.userId, carId: req.params.carId },
  })
    .then((favorites) => res.json(favorites))
    .catch((err) => res.status(500).json({ error: err }));
};
module.exports = {
  createFavourite,
  getFavouritesForUser,
  deleteFav,
};
