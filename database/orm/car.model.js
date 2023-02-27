module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define("car", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description : {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
 
    initial_price: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    year :{
     type:DataTypes.INTEGER,
     allowNull: false,
    },
    transmission :{
      type:DataTypes.STRING,
      allowNull: false,
     },
     body_style :{
      type:DataTypes.STRING,
      allowNull: false,
     },
     images :{
      // type:DataTypes.ARRAY(DataTypes.STRING),
      type:DataTypes.STRING,
      allowNull:false,
     },
     status:{
      type:DataTypes.STRING,
      allowNull:false,
     },
     min_amount:{
      type:DataTypes.STRING,
      allowNull:true,
      defaultValue:200
     },
    //  starting_day:{

    //  },
    //  ending_day:{

    //  },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      foreignKey:true
    },
  });

  return Car;
};