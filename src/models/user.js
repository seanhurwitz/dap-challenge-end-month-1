const { Sequelize, DataTypes, QueryInterface } = require("sequelize");
const Monster = require("../models/monster");

const connection = "mysql://root:dap123@localhost:3306/mysqldb";
const sequelize = new Sequelize(connection, {
  operatorsAliases: 0,
  logging: 0,
}); // 0 = false
// You should have a util function that gives you a sequelize connection without having
// multiple instances of the same sequelize.

let User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      required: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  {
    classMethods: {
      associate: function () {
        User.hasMany(Monster, { foreignKey: "userId" });
      },
    },
  }
);

//User.hasMany(Monster, { foreignKey: "userId" });
const createTableUser = () => {
  User.sync()
    .then(() => {
      console.log("New table created");
    })
    .finally(() => {
      sequelize.close();
    });
};

module.exports = { User, createTableUser };
