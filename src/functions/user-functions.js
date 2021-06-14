const User = require("../models/user");
const Monster = require("../models/monster");
const Sequelize = require("sequelize");
const { createMonster } = require("./monster-functions");

const path = "mysql://user12:12user@localhost:3306/mydb";
const sequelize = new Sequelize(path, {
  operatorsAliases: false,
  logging: false,
});
//redundant code

const createUser = async (testInput) => {
  //Adds a user /* I don't need such a comment here. The method name tells me this */
  const user = User.build({ name: testInput.name });
  await user.save().then(() => {
    console.log(
      "New user " +
        user.name +
        " has been created!" +
        " with the id of: " +
        user.id
    );
  });
};

const updateUser = async (testInput) => {
  //Ability to update the user's name /* I don't need such a comment here. The method name tells me this */
  try {
    const user = await User.findOne({ where: { name: testInput.name } });
    user.update({
      name: newUserName.name,
    }); //this should be asynchronous
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createUser, updateUser };
