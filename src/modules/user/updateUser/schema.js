const yup = require("yup");

const schema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
});

module.exports = schema;
