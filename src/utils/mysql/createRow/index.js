const createRow = async (model, input) => {
  const response = await model.create(input);
  return response.dataValues;
};

module.exports = createRow;
