const { getFullDbSchema } = require("../../../utils/mysql/getFullDbSchema");

const updateUser = async (testNewUser) => {
  try {
    const dbConn = await getFullDbSchema();
    const user = await dbConn.models.User.findOne({
      where: { id: testNewUser.id },
    });
    await user.update({
      name: testNewUser.name,
    });
    console.log("The user's name has been updated to " + user.name);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { updateUser };
