const { response } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loginModel, signupModel } = require("../Models/User.Models");
const { getXataClient } = require("../src/xata");
const xata = getXataClient();
const secret = process.env.SECRET;
require("dotenv").config;

const homepage = (req, res) => {
  res.send("Welcome to write blog");
};

const signup = async (req, res) => {
  try {
    const saltRounds = 10;
    const { firstName, lastName, email, password } = req.body;
   
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const newUser = await signupModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: newUser.id }, secret, { expiresIn: 10 });
    res.status(201).json({
      Message: "Account successfully created",
      newUser,
     
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginModel(email);
    if (!user) {
      res.status(400).json({
        Message: "user not found, pls Signup",
        
      });
      return;
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
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: "2 days" });
    res.status(201).json({
      Message: "user found",
      token,
      user,
    });
    
    // console.log("token", token);
  } catch (error) {
     res.status(500).json({ message: "An error occured" });
    console.log(error);
  }
};

const writepage = async (req, res) =>{
  let token = req.headers.authorization.split(' ')[1]
   
  console.log(token)
  jwt.verify(token, secret, (err, result) =>{
    if(err){
      res.send({status:false, message: "error", err})
    } else {
      res.send({status: true, message: "welcome", result})
    }
  })
}

module.exports = { homepage, signup, login, writepage };
