// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define("notification", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      carId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    brand_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
      bidder_name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      bidder_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      added_bid:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true,
      },
      
    });
  
    return Notification;
  };
  