const { Sequelize } = require("sequelize");

const getDbConnection = (database) => {
  const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    password: "dap123",
    username: "root",
    ...(database ? { database } : {}),
    logging: false,
  });
  return sequelize;
};

module.exports = getDbConnection;
