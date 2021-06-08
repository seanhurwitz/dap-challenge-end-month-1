const { DataTypes } = require("sequelize");
const getDbConnectionWithDb = require("../getDbConnectionWithDb");

const getFullDbSchema = async (bootstrap = false) => {
  const dbConn = await getDbConnectionWithDb(bootstrap);

  dbConn.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  dbConn.define("Monster", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  await dbConn.sync({ alter: true });
  return dbConn;
};

module.exports = getFullDbSchema;
