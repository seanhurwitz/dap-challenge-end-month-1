const { getFullDbSchema } = require("../../../utils/mysql/getFullDbSchema");

const createMonster = async (input) => {
  const dbConnection = await getFullDbSchema();

  const randomNumbers = () => {
    return Math.floor(Math.random() * 10) + 10;
  };
<<<<<<< HEAD
  const hp = await randomNumbers();
  const atk = await randomNumbers();
  const def = await randomNumbers();
=======
  const hp = randomNumbers();
  const atk = randomNumbers();
  const def = randomNumbers();
>>>>>>> bf709e1a7f6f93a80be9dfcc60497b42aa116aee

  const monster = await dbConnection.models.Monster.build({
    ...input,
    hp,
    atk,
    def,
<<<<<<< HEAD
    // name: testInputMonster.name,
    // userId: dbConnection.models.User.id,
=======
>>>>>>> bf709e1a7f6f93a80be9dfcc60497b42aa116aee
  });
  console.log(`input`, input);
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
