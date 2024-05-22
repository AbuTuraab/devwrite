const express = require("express");
const router = express.Router();

const {homepage,signup} = require("../Controllers/User.Controller")

 router.get("/", homepage)
router.post("/signup", signup)

module.exports = router