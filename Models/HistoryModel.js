const mongoose = require("mongoose");
const historySchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    user: {
        type: String,
        required:true
    },
    lastDate: {
        type: Date,
        default:Date.now
    }
});
const historyModel = mongoose.model("history", historySchema);
module.exports = historyModel;
