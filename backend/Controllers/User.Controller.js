const { response } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    const secret = process.env.SECRET;
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: 10 });
    res.status(201).json({
      Message: "user found",
    });
    // res.status(200).json({
    //   Message: "Login successfully",
    //   token: token,
    //   user: user,
    // });
    console.log("token", token);
  } catch (error) {
    // res.status(500).json({ message: "An error occured" });
    console.log("nkjkjh");
  }
};

module.exports = { homepage, signup, login };
