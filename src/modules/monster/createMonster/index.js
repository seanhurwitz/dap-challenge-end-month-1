const { integer } = require("casual");
const {
  mysql: { getFullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./schema");

const createMonster = async (input) => {
  const validatedInput = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const newInput = {
    ...validatedInput,
    hp: integer(100, 200),
    atk: integer(100, 200),
    def: integer(100, 200),
  };
  const response = await createRow(dbConn.models.Monster, newInput);
  return response;
};

module.exports = createMonster;
