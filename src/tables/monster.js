const sequelize = require("../db/mysql");
const { Sequelize, DataType, DataTypes, Model } = require("sequelize");
const mysql = require("mysql");
const User = require("./user");
//using .define method to make model
const Monster = sequelize.define(
  "Monster",
  {
    id: {
      type: DataTypes.INTEGER,
      required: true,
    },
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      required: true,
      /*validate:{
        isEven(value) {
          if (!UserId == User.id) {
            throw new Error('user id must match');
          }
      }*/
    },
    hp: {
      type: DataTypes.INTEGER,
      required: true,
    },
    atk: {
      type: DataTypes.INTEGER,
      required: true,
    },
    def: {
      type: DataTypes.INTEGER,
      required: true,
    },
  },
  {
    /*hooks:{
  afterValidate= (Monster)=>{
    Monster.id = 
  }
}*/
  },
  {
    tableName: "Monster",
    updatedAt: "updated",
    createdAt: "created",
  }
);
Monster.sync()
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });

console.log(Monster === sequelize.models.Monster);

module.exports = Monster;
//creating a model using the en=xtends model idea
// class Monster extends Model {}
// Monster.init(
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
//     UserId: {
//       type: DataTypes.INTEGER,
//       required: true,
//     },
//     hp: {
//       type: DataTypes.INTEGER,
//       required: true,
//     },
//     atk: {
//       type: DataTypes.INTEGER,
//       required: true,
//     },
//     def: {
//       type: DataTypes.INTEGER,
//       required: true,
//     },
//   },
//   {
//     sequelize, // We need to pass the connection instance
//     modelName: "Monster",
//   }
// );
// Monster.sync()
//   .then(() => {})
//   .finally(() => {});
// the defined model is the class itself
//console.log(Monster === sequelize.models.Monster); // true

//using joi to build model
// const monsterSchema = joi.object({
//   id: joi.integer().required(),
//   name: joi.string().required(),
//   Userid: joi.required().ref("User"),
//   hp: joi.integer().required(),
//   atk: joi.integer().required(),
//   def: joi.integer().required(),
// });
