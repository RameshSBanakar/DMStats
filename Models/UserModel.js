const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "enter the first name"],
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
