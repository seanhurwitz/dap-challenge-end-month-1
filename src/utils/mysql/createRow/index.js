const createRow = async (model, input) => {
  const response = await model.create(input);
  return response;
};

module.exports = createRow;
