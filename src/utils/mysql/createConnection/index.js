const { Sequelize } = require("sequelize");

const connection = (database) => {
  const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    password: "dap123",
    username: "root",
    logging: false,
    ...(database ? { database } : {}),
  });
  return sequelize;
};

module.exports = connection;
