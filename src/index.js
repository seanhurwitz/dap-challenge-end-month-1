const sequelize = require("./db/mysql"); // Best practice is to require in order of distance from current file, ie node libs, then npm libs, then local files
const { Sequelize } = require("sequelize");
const { User, createTableUser } = require("./models/user");
const { Monster, createTableMonster } = require("./models/monster");
/* Best to use object destructuring here:
const {user:{User,createTableUser}, monster:{Monster, createTableMonster}}=require('./models');
So it's one require from a specific folder, and you can destructure deeper and deeper into the folder
*/
const { createUser, updateUser } = require("./functions/user-functions");
const {
  createMonster,
  updateMonster,
  growMonster,
  fight,
} = require("./functions/monster-functions");
require("../src/db/mysql");

/*
The imports at the top that are kinda faded out, it means they aren't being used in the file at all.
It is prudent to remove any unused imports.
*/

let user = { name: "John Doe" };
let monster = { name: "Dino" };
let userId = 0;

const createTables = () => {
  createTableUser();
  createTableMonster();
};
/*
Table creations are asynchronous, so this should be an async/await
function so as not to mess up the flow of things
*/

const testCreateUser = async (user) => {
  /*
  you are declaring a global variable user on line 23, so you don't need
  to accept "user" as a parameter
  */
  const testInput = {
    name: "paul",
  };
  user = await createUser(testInput);
  //   const testUser = user.name === testInput.name;
  //   console.log(`CREATE USER: ${testUser}`);
};

const testUpdateUser = async (user) => {
  const testNewUser = {
    name: "Melissa",
  };
  const updatedUser = await updateUser(testNewUser);
  console.log(updatedUser);
};

const testCreateMonster = async (monster) => {
  const testInputMonster = {
    name: "Sully",
  };
  monster = await createMonster(testInputMonster);
  //   const testMonster = monster.name === testInputMonster.name;
  //   console.log(`CREATE MONSTER: ${testMonster}`);
};

const testUpdateMonster = async (monster) => {
  const testUpdatedMonster = {
    name: "Bean",
  };
  const updatedMonster = await updateMonster(testUpdatedMonster);
  console.log(updatedMonster);
};

const testGrowMonster = async (monster) => {
  const testInputMonsterId = {
    id: "6e7a2694-a04d-4047-8878-ae0ca25b4475",
  };
  const grownMonster = await growMonster(testInputMonsterId);
  console.log(grownMonster);
};

const testMonsterFight = async (monster) => {
  const testInputMonsterIdOne = {
    id: "6e7a2694-a04d-4047-8878-ae0ca25b4475",
  };

  const testInputMonsterIdTwo = {
    id: "6e7a2694-a04d-4047-8878-ae0ca25b4476",
  };

  const attack = await fight(testInputMonsterIdOne, testInputMonsterIdTwo);
  //you're passing thru the parameters, but the function doesn't expect them!
  console.log(attack);
};

const runTest = async (user, monster) => {
  //once again no need to pass thru user and monster parameters here.
  console.log(user);
  console.log(monster);
  //await recreateDatabase(); //this is optional but a good point to have, since when you test you don't want id conflicts and such.
  await createTables();
  await testCreateUser();
  //   await testUpdateUser();
  //   await testCreateMonster();
  //   await testUpdateMonster();
  //   await testGrowMonster();
  //   await testMonsterFight();
};
runTest();

module.exports = testCreateMonster;

/*

OVERALL COMMENTS:

- Decent first attempt. Unfortunately no working product
- focus heavily on async/await and how the app flows based on this
- Don't have so many comments in the code. Especially if you have self-defined function and folder names
- Look over the model solution and try replicate in your capacity.

*/
