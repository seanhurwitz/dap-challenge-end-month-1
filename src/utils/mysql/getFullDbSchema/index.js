const getDbConnectionWithDb = require("../getDbConnectionWithDb");
const { Sequelize, DataTypes } = require("sequelize");

const getFullDbSchema = async (bootstrap = false) => {
  const connection = await getDbConnectionWithDb(bootstrap);

  connection.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        required: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
      },
    }
    // {
    //   classMethods: {
    //     associate: function () {
    //       User.hasMany(Monster, { foreignKey: "userId" });
    //     },
    //   },
    // }
  );

  connection.define("Monster", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      required: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      required: true,
      foreignKey: true,
      // references: {
      //   model: "User",
      //   key: "id",
      // },
    },
    name: {
      type: DataTypes.STRING(64),
      required: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      required: true,
    },
    atk: {
      type: DataTypes.INTEGER,
      required: true,
    },
    def: {
      type: DataTypes.INTEGER,
      required: true,
    },
  });
  await connection.sync();
  return connection;
};

module.exports = { getFullDbSchema };
