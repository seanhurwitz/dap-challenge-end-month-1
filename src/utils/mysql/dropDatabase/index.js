const connection = require("../createConnection");

const dropDatabase = async (database) => {
  const dbConn = connection();
  await dbConn.query(`DROP DATABASE IF EXISTS \`${database}\`;`);
};

module.exports = dropDatabase;
