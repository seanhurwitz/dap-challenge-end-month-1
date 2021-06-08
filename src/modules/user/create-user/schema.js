const yup = require("yup");

const schema = yup.object({
  name: yup.string().required(),
});

module.exports = schema;
