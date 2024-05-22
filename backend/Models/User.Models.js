const { getXataClient } = require("../src/xata");
const xata = getXataClient();

const users = await xata.db.users.create({
  firstName,
  lastName,
  email,
  password,
});

export default users;
