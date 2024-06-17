const { getXataClient } = require("../src/xata");
const xata = getXataClient();

const signupModel = async function signupModel({
  firstName,
  lastName,
  email,
  password,
}) {
  return await xata.db.users.create({
    firstName,
    lastName,
    email,
    password,
  });
};

const loginModel = async function loginModel(email) {
  return await xata.db.users
    .filter({
      email,
    })
    .getFirst();
};
module.exports = {
  loginModel,
  signupModel,
};
// export default users;
