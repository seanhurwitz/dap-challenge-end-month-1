const chalk = require("chalk");
const { user, monster } = require("./modules");
const {
  mysql: { getDbConnectionWithDb },
} = require("./utils");

let user1;
let user2;
let user3;
let monster1;
let monster2;
let monster3;

const logTest = (testName, result) => {
  console.log(
    `${testName}\t\t\t${
      result ? chalk.greenBright.bold("PASS") : chalk.redBright.bold("FAIL")
    }`
  );
};

const createUser = async () => {
  user1 = await user.createUser({ name: "Sean Hurwitz" });
  user2 = await user.createUser({ name: "Yossi Zimbler" });
  user3 = await user.createUser({ name: "Shirel Ganon" });
  const test = !!user1.id;
  logTest("CREATE USER", test);
};

const updateUser = async () => {
  const updateInput = {
    id: user1.id,
    name: "Sean Awesome Hurwitz",
  };
  user1 = await user.updateUser(updateInput);
  const test = user1.name === updateInput.name;
  logTest("UPDATE USER", test);
};

const createMonster = async () => {
  monster1 = await monster.createMonster({
    userId: user1.id,
    name: "Grubbles",
  });
  monster2 = await monster.createMonster({ userId: user2.id, name: "Yent0r" });
  monster3 = await monster.createMonster({
    userId: user3.id,
    name: "Shamazongo",
  });
  const test = !!monster1.id;
  logTest("CREATE MONSTER", test);
};

const updateMonster = async () => {
  const updateInput = {
    id: monster1.id,
    name: "Fragmeamn",
  };
  user1 = await monster.updateMonster(updateInput);
  const test = user1.name === updateInput.name;
  logTest("UPDATE MONSTER", test);
};

const growMonster = async () => {
  const oldMonster = { ...monster1 };
  monster1 = await monster.growMonster(monster1.id);
  const test =
    oldMonster.hp < monster1.hp &&
    oldMonster.atk < monster1.atk &&
    oldMonster.def < monster1.def;
  logTest("GROW MONSTER", test);
};

const fight = async () => {
  await monster.fight(monster1.id, monster2.id);
  logTest("FIGHT", true);
};

const testSuite = async () => {
  console.log("BEGIN TESTS\n\n");
  await getDbConnectionWithDb(true);
  await createUser();
  await updateUser();
  await createMonster();
  await updateMonster();
  await growMonster();
  await fight();
  console.log("\n\nEND TESTS");
};

testSuite();
