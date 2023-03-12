module.exports = (sequelize, DataTypes) => {
   
    const Favourite = sequelize.define("favourite", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
     
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
      carId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      }
    });
  
    return Favourite;
  };
   