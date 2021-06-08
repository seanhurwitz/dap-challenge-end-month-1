const { user } = require("./modules");
const {
  mysql: { getDbConnectionWithDb },
} = require("./utils");

let user1;
let user2;
let user3;

const createUser = async () => {
  user1 = await user.createUser({ name: "Sean Hurwitz" });
  user2 = await user.createUser({ name: "Yossi Zimbler" });
  user3 = await user.createUser({ name: "Shirel Ganon" });
  const test = !!user1.id;
  console.log("CREATE USER:\t\t\t", test);
};

const testSuite = async () => {
  await getDbConnectionWithDb(false);
  await createUser();
};

testSuite();
