const {
  mysql: { getFullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./schema");

const createUser = async (input) => {
  const validatedInput = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await createRow(dbConn.models.User, validatedInput);
  return response;
};

module.exports = createUser;
