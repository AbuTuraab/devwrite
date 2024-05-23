const { response } = require("express");

const { getXataClient } = require("../src/xata");
const xata = getXataClient();

require("dotenv").config;

const homepage = (req, res) => {
  res.send("Welcome to write blog");
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await xata.db.users
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
    user = await xata.db.users
      .filter({
        email,
        password,
      })
      .getMany();
    // console.log(user);
  } catch (error) {
    return error;
  }
  if (!user) {
    res.status(400).json({
      Message: "user not found, pls signup",
    });
  }
  // else {
  //   console.log("user is available");
  // }
};

module.exports = { homepage, signup, login };
