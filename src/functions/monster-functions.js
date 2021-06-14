const Monster = require("../models/monster");
const Sequelize = require("sequelize");
const User = require("../models/user");

const path = "mysql://user12:12user@localhost:3306/mydb";
const sequelize = new Sequelize(path, {
  operatorsAliases: false,
  logging: false,
});

const createMonster = async (testInputMonster) => {
  //Create a monster
  // **NB**: When creating a monster, you only need to pass through a name. The method itself should set hp,
  // atk and def values by fetching a different random number between from 10 to 20 for each one (hint: Math.random)
  /* PLEASE clean up comments when done */
  const randomNumbers = () => {
    return Math.floor(Math.random() * 10) + 10;
  };
  hp = await randomNumbers(); //const
  atk = await randomNumbers(); //randomNumbers is not an async function
  def = await randomNumbers();

  const monster = Monster.build({
    name: testInputMonster.name,
    userId: User.id,
  }); //I think this should also be async

  await monster
    .save()
    .then(
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
      )
    );
  //This will work asynchronously since you used await,
  //but no need for .then, since you can retrieve the monster from the db.
};

const updateMonster = () => {
  //Ability to update the monster's name
  try {
    Monster.findOne({ where: { name: testInputMonster.name } }).then(() => {
      if (monster) {
        monster.update({
          name: newMonsterName.name,
        }); //needs to be async
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const growMonster = async (/*should be id here*/) => {
  //This method will take in a monster's ID and randomly increase its stats from 1 to 5 points each
  const newMonsterPowers = () => {
    return Math.floor(Math.random() * 4) + 1;
  };
  const newHp = (await newMonsterPowers()) + hp; //where you getting this hp variable from?
  //Ideally fetch the monster from the db using the id passed thru in the function.
  const newAtk = (await newMonsterPowers()) + atk;
  const newDef = (await newMonsterPowers()) + def;

  try {
    //async
    Monster.findByPk({ where: { id: testInputMonsterId.id } }).then(() => {
      if (monster) {
        monster.update({
          hp: newMonsterPowers.newHp, //this should just be newHp. see how newMonsterPowers is yellow? that means it's a function
          //and you can't call a key on a function!
          atk: newMonsterPowers.newAtk,
          def: newMonsterPowers.newDef,
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const fight = async () => {
  //This method takes in 2 monsters' IDs and lets each one attack the other once.
  //You can add onto this as much as you like, as far as your imagination takes you!

  // An example:
  // MONSTER A: 30 ATK
  // MONSTER B: 20 DEF, 20 HP

  // We could just have the attacking monster's ATK minus the defending monster's
  // DEF go straight to the HP of the defending monster. For example: A Attacks B: 30 - 20 = 10 damage, and 20 - 10 is 10.
  // And that will be the remaining HP of the defending monster.

  // But let's make it more complicated just because!
  // The net damage dealt will be Monster A's ATK less Monster B's DEF, multiplied by 1 minus the ratio of monster B's
  // DEF to monster A's ATK:
  // So if A attacks, you take (30-20)x(1- (20/30)) = 10x(1/3) = 3 (ROUND DOWN)

  // ONE MORE THING: Every attack has a one in seven chance of a critical hit, whereby the net damage is tripled.
  // So if the above was a critical hit, then the damage is 9, not 6.

  /* PLEASE REMOVE COMMENTS! */

  const monsterOne = Monster.findByPk({
    where: { id: testInputMonsterIdOne.id },
  });
  const monsterTwo = Monster.findByPk({
    where: { id: testInputMonsterIdTwo.id },
  });
  const criticalhit = Math.floor(Math.random() * 7 + 1); //nice
  let damage;

  const monst1Attacks = () => {
    const roundOne = //monster 1 attacks monster 2
      (monsterOne.atk - monsterTwo.def) * (1 - monsterTwo.def / monsterOne.atk);

    if (criticalhit === 4) {
      damage = roundOne * 3;
      monsterTwo.hp = monsterTwo.hp - damage;
      return monsterTwo;
    } else {
      monsterTwo.hp = monsterTwo.hp - roundOne;
      //try use the damage variable consistently, if you're going to declare it
      return monsterTwo;
    }
  };

  const monst2Attacks = () => {
    const roundTwo = // monster 2 attacks monster 1
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
  //I'd rather not have function within functions here. Let it all be a single flow.
};

module.exports = { createMonster, updateMonster, growMonster, fight };
