const { integer } = require("casual");
const {
  mysql: { getFullDbSchema, updateRow, getRow },
} = require("../../../utils");

const growMonster = async (id) => {
  const dbConn = await getFullDbSchema();
  const monster = await getRow(dbConn.models.Monster, id);
  const newInput = {
    ...monster,
    hp: monster.hp + integer(1, 5),
    atk: monster.atk + integer(1, 5),
    def: monster.def + integer(1, 5),
  };
  const response = await updateRow(dbConn.models.Monster, newInput);
  return response;
};

module.exports = growMonster;
