const { database } = require("../../../config");
const getDbConnection = require("../getDbConnection");
const dropDatabase = require("../dropDatabase");
const createDatabase = require("../createDatabase");

const getDbConnectionWithDb = async (bootstrap = false) => {
  if (bootstrap) {
    await dropDatabase(database);
    const response = await createDatabase(database, true);
    return response;
  }
  return getDbConnection(database);
};

module.exports = getDbConnectionWithDb;
