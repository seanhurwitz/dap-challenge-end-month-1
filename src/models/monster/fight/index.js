const { Monster } = require("../../../utils/mysql/getFullDbSchema");

const fight = async () => {
  const monsterOne = Monster.findByPk({
    where: { id: testInputMonsterIdOne.id },
  });
  const monsterTwo = Monster.findByPk({
    where: { id: testInputMonsterIdTwo.id },
  });
  const criticalhit = Math.floor(Math.random() * 7 + 1);
  let damage;

  const monst1Attacks = () => {
    const roundOne =
      (monsterOne.atk - monsterTwo.def) * (1 - monsterTwo.def / monsterOne.atk);

    if (criticalhit === 4) {
      damage = roundOne * 3;
      monsterTwo.hp = monsterTwo.hp - damage;
      return monsterTwo;
    } else {
      monsterTwo.hp = monsterTwo.hp - roundOne;
      return monsterTwo;
    }
  };

  const monst2Attacks = () => {
    const roundTwo =
      (monsterTwo.atk - monsterOne.def) * (1 - monsterOne.def / monsterTwo.atk);

    if (criticalhit === 4) {
      damage = roundTwo * 3;
      monsterOne.hp = monsterOne.hp - damage;
      return monsterOne;
    } else {
      monsterOne.hp = monsterOne.hp - roundTwo;
      return monsterOne;
    }
  };

  await monst1Attacks();
  await monst2Attacks();
};

module.exports = { fight };
