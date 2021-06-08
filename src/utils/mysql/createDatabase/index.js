const getDbConnection = require("../getDbConnection");

const createDatabase = async (database, returnNewConnection = false) => {
  const dbConn = getDbConnection();
  await dbConn.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
  if (returnNewConnection) {
    return getDbConnection(database);
  }
};

module.exports = createDatabase;
