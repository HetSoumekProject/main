module.exports = (sequelize, DataTypes) => {
   
    const Image = sequelize.define("image", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
    });
  
    return Image;
  };
