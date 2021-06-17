const { Monster } = require("../../../utils/mysql/getFullDbSchema");

const growMonster = async () => {
  const newMonsterPowers = () => {
    return Math.floor(Math.random() * 4) + 1;
  };
  const newHp = (await newMonsterPowers()) + monster.hp;
  const newAtk = (await newMonsterPowers()) + monster.atk;
  const newDef = (await newMonsterPowers()) + monster.def;

  try {
    await Monster.findByPk({ where: { id: testInputMonsterId.id } });
    if (monster) {
      monster.update({
        hp: newMonsterPowers.newHp,
        atk: newMonsterPowers.newAtk,
        def: newMonsterPowers.newDef,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { growMonster };
