const { getFullDbSchema } = require("../../../utils/mysql/getFullDbSchema");

const createMonster = async (input) => {
  const dbConnection = await getFullDbSchema();

  const randomNumbers = () => {
    return Math.floor(Math.random() * 10) + 10;
  };
  const hp = await randomNumbers();
  const atk = await randomNumbers();
  const def = await randomNumbers();

  const monster = await dbConnection.models.Monster.build({
    ...input,
    hp,
    atk,
    def,
    // name: testInputMonster.name,
    // userId: dbConnection.models.User.id,
  });

  await monster.save();
  console.log(
    "New monster " +
      monster.name +
      " has been created!" +
      " with the id of: " +
      monster.id +
      ". It's hit points are: " +
      monster.hp +
      ", attack power: " +
      monster.atk +
      " and defence power: " +
      monster.def
  );
};

module.exports = { createMonster };
