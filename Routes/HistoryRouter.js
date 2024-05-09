const express = require("express");
const Router = express.Router();
const {
  addHistory,
  removeHistory,
  getHistory,
} = require("../Controllers/HistoryController");
const { auth } = require("../middleware/AuthMiddleware")
Router.route("/getHistory").get(auth, getHistory);
Router.route("/addHistory").post(auth,addHistory);
Router.route("/removeHistory").post(auth,removeHistory);

module.exports = Router;
