module.exports = (sequelize, DataTypes) => {
   
    const Room = sequelize.define("room", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      carId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
    });
    return Room;
  };
