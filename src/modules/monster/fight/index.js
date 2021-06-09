const { integer } = require("casual");
const { cyanBright } = require("chalk");
const {
  mysql: { getFullDbSchema, updateRow, getRow },
} = require("../../../utils");

const logCritical = (isCritical) => {
  isCritical && console.log(cyanBright.bold("A Critical Hit!"));
};

const attack = (atkMonster, defMonster) => {
  const { name, atk } = atkMonster;
  const { name: name2, def } = defMonster;
  console.log(`\n${name} attacks!`);
  const isCritical = integer(1, 7) === 7;
  logCritical(isCritical);
  const damage =
    Math.max(
      atk < def / 2
        ? 1
        : Math.floor(
            ((atk - def / 2) * (1 - def / 2 / atk) * 1) / integer(1, 5)
          ),
      1
    ) * (isCritical ? 3 : 1);
  defMonster.hp = Math.max(defMonster.hp - damage, 0);
  console.log(`${damage} damage dealt to ${name2}.`);
  const isDead = defMonster.hp === 0;
  const damageMessage = isDead
    ? `${name2} is knocked out!`
    : `${name2} is left with ${defMonster.hp} HP, but is still standing strong!`;
  console.log(damageMessage);
  return { isDead, name };
};

const fight = async (id1, id2) => {
  const dbConn = await getFullDbSchema();
  const monster1 = await getRow(dbConn.models.Monster, id1);
  const monster2 = await getRow(dbConn.models.Monster, id2);
  const { name, hp, atk, def } = monster1;
  const { name: name2, hp: hp2, atk: atk2, def: def2 } = monster2;
  console.log(
    `\n\n${name} (${atk} atk, ${def} def, ${hp} hp) vs ${name2} (${atk2} atk, ${def2} def, ${hp2} hp) . An exciting battle!`
  );
  let monsterIndex = 0;
  let winningMonster = "";
  const monsterArray = [monster1, monster2];
  do {
    const { isDead, name: winner } = attack(
      monsterArray[monsterIndex],
      monsterArray[1 - monsterIndex]
    );
    monsterIndex = 1 - monsterIndex;
    if (isDead) {
      winningMonster = winner;
    }
  } while (!winningMonster);
  console.log(`\n${winningMonster} is the winner!`);
};

module.exports = fight;
