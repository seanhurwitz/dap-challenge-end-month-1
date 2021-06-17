const { Sequelize } = require("sequelize");
const { getFullDbSchema } = require("../../../utils/mysql/getFullDbSchema");

const createUser = async (testInput) => {
  const dbConnection = await getFullDbSchema();
  const user = await dbConnection.models.User.build({ name: testInput.name });
  await user.save();
  console.log(
    "New user " +
      user.name +
      " has been created!" +
      " with the id of: " +
      user.id
  );
};

module.exports = { createUser };
