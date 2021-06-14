const User = require("../tables/user");
const sequelize = require("sequelize");

//createuser();
const createUser = async () => {
  const user = User.build({ name: testInput.name });
  await user.save();
  console.log(user.toJSON());
  try {
  } catch (e) {
    console.log(e);
  }
};
//updateUser(); //Ability to update the user's name
//i want to find the user by id and then update the name:
//then create a clause of only those with the corect id can update the user
const updateUser = async () => {
  try {
    const userUpdate = await User.create({ name: testInput.name });
    user.name = userUpdate;
    user.save();
    if (!user) {
      console.log("must be valid user");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createUser, updateUser };
// const updateUser = async () => {
//   const updates = Object.keys(query.body);
//   const allowedUpdates = ["name", "id"];
//   const validUpdates = allowedUpdates.every((update) => {
//     return allowedUpdates.includes(update);
//   });
//   if (!validUpdates) {
//     console.log("invalid update");
//   }
//   try {
//     const user = await User.create({ name: testInput.name});
//     user.name = new [names]();
//     user.save();
//     if (!user) {
//       console.log("need valid user to update");
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };
