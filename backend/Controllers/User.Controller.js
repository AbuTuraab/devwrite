const { response } = require("express");
const bcrypt = require("bcrypt");

const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

const { getXataClient } = require("../src/xata");
const xata = getXataClient();

require("dotenv").config;

const homepage = (req, res) => {
  res.send("Welcome to write blog");
};

const signup = async (req, res) => {
  const saltRounds = 10;

  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const newUser = await xata.db.users
    .create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
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

  try {
    const user = await xata.db.users
      .filter({
        email,
      })
      .getFirst();
    if (!user) {
      res.status(400).json({
        Message: "user not found, pls Signup",
      });
      console.log("user not found");
    } else {
      res.status(201).json({
        Message: "user found",
      });
    }
    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword) {
      console.log("wrong password");
      res.status(400).json({
        Message: "wrong login details",
      });
    } else {
      console.log("login successfully");
    }
  } catch (error) {
    res.status(500).json({ message: "An error occured" });
  }
};

module.exports = { homepage, signup, login };
