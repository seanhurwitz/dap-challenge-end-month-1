const { createUser, updateUser } = require("./models/user/index");
const {
  createMonster,
  updateMonster,
  growMonster,
  fight,
} = require("./models/monster/index");
const {
  mysql: { getDbConnectionWithDb },
} = require("./utils");

let user = { name: "John Doe" };
let monster = { name: "Dino" };

const testCreateUser = async () => {
  const testInput = {
    name: "paul",
  };
  user = await createUser(testInput);
  console.log(user);
};

const testUpdateUser = async () => {
  const testNewUser = {
    name: "Melissa",
  };
  const updatedUser = await updateUser(testNewUser);
  console.log(updatedUser);
};

const testCreateMonster = async () => {
  const testInputMonster = {
    name: "Sully",
  };
  monster = await createMonster(testInputMonster);
};

const testUpdateMonster = async () => {
  const testUpdatedMonster = {
    name: "Bean",
  };
  const updatedMonster = await updateMonster(testUpdatedMonster);
  console.log(updatedMonster);
};

const testGrowMonster = async () => {
  const testInputMonsterId = {
    id: "6e7a2694-a04d-4047-8878-ae0ca25b4475",
  };
  const grownMonster = await growMonster(testInputMonsterId);
  console.log(grownMonster);
};

const testMonsterFight = async () => {
  const testInputMonsterIdOne = {
    id: "6e7a2694-a04d-4047-8878-ae0ca25b4475",
  };

  const testInputMonsterIdTwo = {
    id: "6e7a2694-a04d-4047-8878-ae0ca25b4476",
  };

  const attack = await fight();
  console.log(attack);
};

const runTest = async () => {
  console.log(user);
  console.log(monster);
  await getDbConnectionWithDb();
  //await testCreateUser();
  //await testUpdateUser();
  await testCreateMonster();
  // await testUpdateMonster();
  // await testGrowMonster();
  // await testMonsterFight();
};
runTest();

module.exports = testCreateMonster;
