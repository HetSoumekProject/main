const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize("Heet_soumekk","ahlem","password",
  {
    HOST: "localhost",
    dialect: "mysql",
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user.model")(sequelize, DataTypes);
db.Car = require("./car.model")(sequelize, DataTypes);
db.Bid = require("./bid.model")(sequelize, DataTypes);
db.Message = require("./message.model")(sequelize, DataTypes);
db.Notification = require ("./notification.model")(sequelize, DataTypes);
db.Room =require ("./room.model")(sequelize, DataTypes);
db.Favourite = require("./favourite.mode")(sequelize, DataTypes);
db.PrivateMessage = require("./privateMessages.model")(sequelize, DataTypes);
db.Image=require("./image.model")(sequelize, DataTypes);


db.User.hasMany(db.Car, {
  foreignKey: "userId",
});
db.Car.belongsTo(db.User, {
     as: "user",
     foreignKey: "userId",
     onDelete: "CASCADE",
  });
db.User.hasMany(db.Message, {
  foreignKey: "userId",
});

db.Message.belongsTo(db.User, {
      as: "user",
      foreignKey: "userId",
     onDelete: "CASCADE",
   });
db.User.hasMany(db.Notification,{
  foreignKey: "userId",
});
db.Notification.belongsTo(db.User, {
     as: "user",
     foreignKey: "userId",
     onDelete: "CASCADE",
  });
 
  db.User.hasMany(db.PrivateMessage,{
    foreignKey: "userId",
  });
  db.PrivateMessage.belongsTo(db.User, {
    as: "user",
    foreignKey: "userId",
    onDelete: "CASCADE",
 });

db.User.hasMany(db.Bid,{
  foreignKey: "userId",
})

db.Bid.belongsTo(db.User,{
     as: "user",
     foreignKey: "userId",
     onDelete: "CASCADE",

})
db.User.hasMany(db.Favourite, {
  foreignKey: "userId",
});
db.Favourite.belongsTo(db.User, {
     as: "user",
     foreignKey: "userId",
     onDelete: "CASCADE",
  });
db.User.belongsToMany(db.Room,{
  through: "UserRoom"

})
// db.Room.belongsToMany(db.User,{
//   through: "UserRoom"

// })
db.Car.hasMany(db.Bid,{
  foreignKey: "carId",
})
db.Bid.belongsTo(db.Car, {
  as: "car",
  foreignKey: "carId",
  onDelete: "CASCADE",
});
db.Car.hasMany(db.Favourite,{
  foreignKey: "carId",
})

db.Favourite.belongsTo(db.Car,{
  as: "car",
  foreignKey: "carId",
  onDelete: "CASCADE",

})
db.Car.hasMany(db.Image,{
  foreignKey: "carId",
})
db.Image.belongsTo(db.Car,{
  as: "car",
  foreignKey: "carId",
  onDelete: "CASCADE",
})

// db.Car.hasOne(db.Room,);
// db.Room.belongsTo(db.Car, {
//   foreignKey: {
//     name: 'carId'
//   }
// });

db.Car.hasMany(db.Message,{
  foreignKey: "carId",
})


db.Message.belongsTo(db.Car,{

  foreignKey: "carId",
  onDelete: "CASCADE",

})

db.sequelize.sync()
db.sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.error("connection lost", err));

module.exports = db;
