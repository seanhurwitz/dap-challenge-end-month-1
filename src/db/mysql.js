const mysql = require("mysql2");
const Sequelize = require("sequelize");
const { createTableUser } = require("../models/user");
const { createTableMonster } = require("../models/monster");

const connection = "mysql://root:dap123@localhost:3306/mysqldb";
const sequelize = new Sequelize(connection, { operatorsAliases: 0 }); // 0 = false

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully.");
    createTableUser();
    createTableMonster();
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  })
  .finally(() => {
    sequelize.close();
  });

module.exports = connection;
global.connection = connection;
