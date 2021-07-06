const { user } = require("../../modules");

module.exports = {
  Mutation: {
    createUser: (_, { input }) => user.createUser(input),
  },
};
