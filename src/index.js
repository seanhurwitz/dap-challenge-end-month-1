require("./db/mysql");

//require("./functions/monster");
const { createUser, updateUser } = require("./functions/user");
const User = require("./tables/user");
const Monster = require("./tables/user");

let user; //I'm definine the user variable in here so I can use it in all the methods without having to create a user every time.
let monster; //Same as above.

const testCreateUser = async () => {
  const testInput = {
    name: "Charles Jackson",
  };
  user = await createUser(testInput);
  const test = user.name === testInput.name;
  console.log(`CREATE USER: ${test}`);
};

/*const runTest = async () => {
  await recreateDatabase(); //this is optional but a good point to have, since when you test you don't want id conflicts and such.
  await testCreateUser();
  await testUpdateUser();
  //etc
};

runTest();*/
