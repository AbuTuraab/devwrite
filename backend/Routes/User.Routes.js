const express = require("express");
const router = express.Router();

const { homepage, signup, login, writepage } = require("../Controllers/User.Controller");

router.get("/", homepage);
router.post("/signup", signup);
router.post("/login", login);


/***Authenticated routes below */
router.get("/writepage", writepage)

module.exports = router;
