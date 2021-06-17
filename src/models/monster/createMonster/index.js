const { getFullDbSchema } = require("../../../utils/mysql/getFullDbSchema");

const createMonster = async (testInputMonster) => {
  const dbConnection = await getFullDbSchema();

  const randomNumbers = async () => {
    return Math.floor(Math.random() * 10) + 10;
  };
  hp = await randomNumbers();
  atk = await randomNumbers();
  def = await randomNumbers();

  const monster = await dbConnection.models.Monster.build({
    name: testInputMonster.name,
    userId: dbConnection.models.User.id,
  });

  await monster.save();
  console.log(
    "New monster " +
      monster.name +
      " has been created!" +
      " with the id of: " +
      monster.id +
      "It's hit points are: " +
      monster.hp +
      ", attack power: " +
      monster.atk +
      " and defence power: " +
      monster.def
  );
};

module.exports = { createMonster };
