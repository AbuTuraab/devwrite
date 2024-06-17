const express = require("express");
const router = express.Router();

const { homepage, signup, login } = require("../Controllers/User.Controller");

router.get("/", homepage);
router.post("/signup", signup);
router.post("/login", login);

/***Authenticated routes below */

module.exports = router;
