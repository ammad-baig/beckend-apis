const express = require("express");
const AuthController = require("../controllers/AuthController");
const route = express.Router();

route.post("/login", AuthController.login);
route.post("/signup", AuthController.signup);

module.exports = route;
