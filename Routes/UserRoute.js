const express = require("express");
const Router = express.Router();
const { userLogin, userSignup } = require("../Controllers/UserController");
Router.route("/login").post(userLogin);
Router.route("/signup").post(userSignup);

module.exports = Router;
