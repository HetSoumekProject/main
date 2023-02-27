// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define("notification", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
          content: {
        type: DataTypes.STRING,
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
  