const express = require("express");
const Router = express.Router();
const {
  addHistory,
  removeHistory,
  getHistory,
  systeminfo,
} = require("../Controllers/HistoryController");
const { auth } = require("../middleware/AuthMiddleware")
Router.route("/getHistory").get(auth, getHistory);
Router.route("/addHistory").post(auth,addHistory);
Router.route("/removeHistory").post(auth,removeHistory);
Router.route("/systeminfo").post(auth,systeminfo)
module.exports = Router;
