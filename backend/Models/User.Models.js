


import { getXataClient } from "./xata";
const xata = getXataClient();

const  users = await xata.db.users.create({
  firstName: "string",
  lastName: "string",
  email: "string",
  password: "string",
});

export default users