const updateUser = async (testInput) => {
  try {
    const user = await User.findOne({ where: { name: testInput.name } });
    await user.updateRow({
      name: newUserName.name,
    });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { updateUser };
