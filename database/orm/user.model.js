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
    img:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png"
    }

  });
  return User;
};