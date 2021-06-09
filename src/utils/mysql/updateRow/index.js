const { dissoc } = require("ramda");
const getRow = require("../getRow");

const updateRow = async (model, input, idKey = "id", returning = true) => {
  await model.update(dissoc(idKey, input), {
    where: {
      [idKey]: input[idKey],
    },
  });
  if (returning) {
    const response = await getRow(model, input[idKey]);
    return response;
  }
};

module.exports = updateRow;
