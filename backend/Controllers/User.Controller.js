const { response } = require("express");

// const { getXataClient } = require("./xata.io/cli");
// const xata = getXataClient();


require("dotenv").config


const homepage = (req, res) =>{
        res.send("Welcome to write blog")
}

const signup = async(req, res) =>{
    const {firstName, lastName, email, password} = req.body;
    console.log(firstName, lastName, email, password)



    if (response) {
      
        res.status(201).json({Message:"Successfully registered"})
        
      } else if(err){
        console.log(err);
        res.status(500).json({Message:"Error occured"});
      }
} 

module.exports = {homepage, signup}