const { getFullDbSchema } = require("../../../utils/mysql/getFullDbSchema");

const growMonster = async (testInputMonsterId) => {
  try {
    const dbConn = await getFullDbSchema();

    const newMonsterPowers = () => {
      return Math.floor(Math.random() * 4) + 1;
    };

    const monster = await dbConn.models.Monster.findOne({
      where: { id: testInputMonsterId.id },
    });
    if (monster) {
      monster.update({
        //...monster,
        hp: newMonsterPowers() + monster.hp,
        atk: newMonsterPowers() + monster.atk,
        def: newMonsterPowers() + monster.def,
      });
      console.log(
        "The monster has grown! " +
          monster.name +
          "'s new hp: " +
          monster.hp +
          " atk: " +
          monster.atk +
          " and def: " +
          monster.def
      );
      return monster;
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { growMonster };
