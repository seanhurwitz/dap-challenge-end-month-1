const { database } = require("../database/database");
const connection = require("../createConnection");
const dropDatabase = require("../dropDatabase");
const createDatabase = require("../createDatabase");
const { Sequelize } = require("sequelize");

const getDbConnectionWithDb = async (bootstrap = false) => {
  if (bootstrap) {
    await dropDatabase(database);
    const response = await createDatabase(database, true);
    return response;
  }
  return connection(database);
};

module.exports = getDbConnectionWithDb;
