// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
        first_name: {
      type: DataTypes.STRING,
      allowNull: false,
   
    },
    last_name:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    firebase_id:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

     cin_f: {
      type: DataTypes.STRING,
      allowNull: true,
      
    }, 
    cin_b: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"user"

    },
     phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    }, 
    roomId:{
      type: DataTypes.INTEGER,
      allowNull: true,
      foreignKey:true,
    },
   
  });

  return User;
};