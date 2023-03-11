// Define and export the sequelize model that represents the table comments.

module.exports = (sequelize, DataTypes) => {
   
    const Message = sequelize.define("message", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
      carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
    },
    { timestamps: false }
 );
    return Message;
  };
