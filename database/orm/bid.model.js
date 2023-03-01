 module.exports = (sequelize, DataTypes) => {
   
    const Bid = sequelize.define("bid", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
      
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      }
    });
  
    return Bid;
  };
