// Define and export the sequelize model that represents the table comments.

module.exports = (sequelize, DataTypes) => {
   
    const PrivateMessage = sequelize.define("privateMessage", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
      
    });
    return PrivateMessage;
  };
