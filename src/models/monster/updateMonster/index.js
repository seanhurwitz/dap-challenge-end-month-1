const { Monster } = require("../../../utils/mysql/getFullDbSchema");

const updateMonster = async () => {
  try {
    await Monster.findOne({ where: { name: testInputMonster.name } });
    if (monster) {
      monster.update({
        name: newMonsterName.name,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { updateMonster };
