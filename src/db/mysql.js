//const mysql = require("mysql");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("", "root", "dap123", {
  host: "localhost",
  dialect: "mysql",
  database: "battle_royal_db",
});

module.exports = sequelize;
