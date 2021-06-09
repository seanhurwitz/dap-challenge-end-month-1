const yup = require("yup");

const schema = yup.object({
  userId: yup.string().required(),
  name: yup.string().required(),
});

module.exports = schema;
