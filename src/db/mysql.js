const mysql = require("mysql2");
const Sequelize = require("sequelize"); //the Sequelize here should be {Sequelize} as per the docs
const { createTableUser } = require("../models/user");
const { createTableMonster } = require("../models/monster");

const connection = "mysql://root:dap123@localhost:3306/mysqldb";
const sequelize = new Sequelize(connection, { operatorsAliases: 0 }); // 0 = false

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully.");
    createTableUser(); //asynchronous, will break;
    createTableMonster(); //asynchronous, will break.
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  })
  .finally(() => {
    sequelize.close();
    //no need to close it here.
  });

module.exports = connection;
global.connection = connection; //not sure what you're trying to do here. Set a global variable?

/*
This needs to be wrapped in a function.
The function would be a perfect bootstrap function if it were asynchronous.
Then you could reference it whenever you need a sequelize object and associated functionality.
*/
