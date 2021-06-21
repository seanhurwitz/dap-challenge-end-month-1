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
    name: "Paul",
  };
  user = await createUser(testInput);
};

const testUpdateUser = async () => {
  const testNewUser = {
    id: "6a7df7a9-e7a0-401b-8f14-b3265ba3a23b",
    name: "Melissa",
  };
  await updateUser(testNewUser);
};

const testCreateMonster = async () => {
  const testInputMonster = {
    name: "Sully",
    userId: user.id,
  };
  monster = await createMonster(testInputMonster);
};

const testUpdateMonster = async () => {
  const testUpdatedMonster = {
    id: "a6248408-0913-43e6-85ce-9edaed7f5b28",
    name: "Bean",
  };
  await updateMonster(testUpdatedMonster);
};

const testGrowMonster = async () => {
  const testInputMonsterId = {
    id: "9ff7061e-9836-483b-b75b-57f80e602c91.",
    name: "Sully",
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

  const attack = await fight(testInputMonsterIdOne, testInputMonsterIdTwo);
  console.log(attack);
};

const runTest = async () => {
  await getDbConnectionWithDb();
  await testCreateUser();
  //await testUpdateUser();
  await testCreateMonster();
  //await testUpdateMonster();
  //await testGrowMonster();
  await testMonsterFight();
};
runTest();

module.exports = testCreateMonster;
