const sequelize = require("./db/mysql");
const { Sequelize } = require("sequelize");
const { User, createTableUser } = require("./models/user");
const { Monster, createTableMonster } = require("./models/monster");
const { createUser, updateUser } = require("./functions/user-functions");
const {
  createMonster,
  updateMonster,
  growMonster,
  fight,
} = require("./functions/monster-functions");
require("../src/db/mysql");

let user = { name: "John Doe" };
let monster = { name: "Dino" };
let userId = 0;

const createTables = () => {
  createTableUser();
  createTableMonster();
};
const testCreateUser = async (user) => {
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
  console.log(attack);
};

const runTest = async (user, monster) => {
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
