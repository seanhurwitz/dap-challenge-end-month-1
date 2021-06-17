const connection = require("../createConnection");

const createDatabase = async (database, returnNewConnection = false) => {
  const databaseConnection = connection();
  await databaseConnection.query(
    `CREATE DATABASE IF NOT EXISTS \`${database}\``
  );
  if (returnNewConnection) {
    return connection(database);
  }
};

module.exports = createDatabase;
