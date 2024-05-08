const express = require("express");
const Router = express.Router();
const { addHistory, removeHistory } = require("../Controllers/HistoryController");
Router.route("/addHistory").post(addHistory);
Router.route("/removeHistory").post(removeHistory);

module.exports = Router;
