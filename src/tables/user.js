const sequelize = require("../db/mysql");
const { createUser, updateUser } = require("../functions/user");
const { Sequelize, DataType, DataTypes, Model } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    _id: {
      type: DataTypes.INTEGER,
      required: true,
    },
  },
  {
    tableName: "User",
    updatedAt: "updated",
    createdAt: "created",
  }
);
User.sync()
  .then(() => {
    return createUser();
  })
  .then(() => {
    return updateUser();
  })
  .catch((error) => {
    console.log(error);
  });

console.log(User === sequelize.models.User);
module.exports = User;

// class User extends Model {}

// User.init(
//   {
//     // Model attributes are defined here
//     name: {
//       type: DataTypes.STRING,
//       required: true,
//     },
//     id: {
//       type: DataTypes.INTEGER,
//       required: true,
//       // allowNull defaults to true
//     },
//   },
//   {
//     sequelize, // We need to pass the connection instance
//     modelName: "User",
//   }
// );
// User.sync()
//   .then(() => {})
//   .finally(() => {});
// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true

// const User = Sequelize.define(
//   "User",
//   {
//     name: {
//       type: DataTypes.STRING,
//       required: true,
//     },
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       required: true,
//     },
//   },
//   {
//     tableName: "User",
//   }
// );
// User.sync()
//   .then(() => {
//     console.log("conected");
//   })
//   .finally(() => {
//     console.log("connected");
//   });
// console.log(User === sequelize.models.User);

// const sequelize= new Sequelize('splite:memory'),
// class User extends Model{}
// User.init({
//     name:{
//         type:DataTypes.STRING,
//         required:true
//     },
//     id:{
//         type:DataTypes.INTEGER,autoIncrement:true,
//         required:true
//     },
//         sequelize,modelName:'User'

// })
