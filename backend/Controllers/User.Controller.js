const { response } = require("express");

const { getXataClient } = require("../src/xata");
const xata = getXataClient();

require("dotenv").config;

const homepage = (req, res) => {
  res.send("Welcome to write blog");
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await xata.db.users.create({
    firstName,
    lastName,
    email,
    password,
  });
  const dataavailable = await xata.db.users.getMany({
    pagination: { size: 100 },
  });
  console.log(dataavailable);
  if (response) {
    res.status(201).json({ Message: "Successfully registered" });
  } else if (err) {
    console.log(err);
    res.status(500).json({ Message: "Error occured" });
  }
};

module.exports = { homepage, signup };
