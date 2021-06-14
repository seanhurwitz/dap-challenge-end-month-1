const Monster = require("../tables/monster");
const sequelize = require("sequelize");
createMonster(); //Create a monster
const createMonster = async () => {
  try {
    const monster = Monster.build({ name: testInput.name });
    await monster.save();
    console.log(monster.toJSON());
  } catch (e) {
    console.log(e);
  }
};
//method- getForeignKeyReferencesForTable
updateMonster(); //Ability to update the monster's name
//only want the user to update his own monster.
const updateMonster = async () => {
  Monster.belongsTo(User);

  try {
    const monsterupdate = await Monster.findOrCreate({ testInput });
    monster.name = monsterupdate;
    await monster.save();
    if (!monster) {
      console.log("must be a valid monster");
    }
  } catch (e) {
    console.log(e);
  }
};
growMonster(); //This method will take in a monster's ID and randomly increase its stats from 1 to 5 points each
const growMonster = async () => {
  const id = monster.id;
};
fight(); //This method takes in 2 monsters' IDs and lets each one attack the other once. You can add onto this as much as you like, as far as your imagination takes you!
/*const userUpdate = await User.create({ name: testInput.name });
    user.name = userUpdate;
    user.save();*/
