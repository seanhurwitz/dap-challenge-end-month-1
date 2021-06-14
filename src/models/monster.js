const User = require("./user");
const { Sequelize, DataTypes, QueryInterface } = require("sequelize");
//const { createUser } = require("..functions/user-functions");

const connection = "mysql://root:dap123@localhost:3306/mysqldb";
const sequelize = new Sequelize(connection, {
  operatorsAliases: 0,
  logging: 0,
}); // 0 = false
// You should have a util function that gives you a sequelize connection without having
// multiple instances of the same sequelize.

let Monster = sequelize.define("monster", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    required: true,
    primaryKey: true,
    //autoIncrement: true,
  },
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    required: true,
    foreignKey: true,
    references: {
      model: "users",
      key: "id",
    },
  },
  name: {
    type: DataTypes.STRING(64),
    required: true,
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
});

Monster.associate = function () {
  Monster.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
    onDelete: "CASCADE",
  });
};

const createTableMonster = () => {
  //await Monster.sync()
  Monster.sync()
    .then(() => {
      console.log("New table created");
    })
    .finally(() => {
      sequelize.close();
    });
};

module.exports = { Monster, createTableMonster };
