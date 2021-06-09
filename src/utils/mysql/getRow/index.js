const getRow = async (model, id) => {
  const response = await model.findByPk(id);
  return response.dataValues;
};

module.exports = getRow;
