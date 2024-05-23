const { response } = require("express");

const { getXataClient } = require("../src/xata");
const xata = getXataClient();

require("dotenv").config;

const homepage = (req, res) => {
  res.send("Welcome to write blog");
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await xata.db.users
    .create({
      firstName,
      lastName,
      email,
      password,
    })
    .then((response) => {
      console.log("User signup successfuly now");
      res.status(201).json({ Message: "Successfully registered" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ Message: "Error occured" });
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = xata.db.users
      .filter({
        email,
        password,
      })
      .getMany();
  } catch (error) {
    return new Error();
  }
  if (!user) {
    res.status(400).json({
      Message: "user not found, please sign up",
    });
  }
};

module.exports = { homepage, signup, login };
