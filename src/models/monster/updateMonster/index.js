const { getFullDbSchema } = require("../../../utils/mysql/getFullDbSchema");

const updateMonster = async (testUpdatedMonster) => {
  try {
    const dbConn = await getFullDbSchema();
    const monster = await dbConn.models.Monster.findOne({
      where: { id: testUpdatedMonster.id },
    });
    if (monster) {
      monster.update({
        name: testUpdatedMonster.name,
      });
    }
    console.log("The monster's name has been updated to " + monster.name + ".");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { updateMonster };
