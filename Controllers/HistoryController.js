const History = require("../Models/HistoryModel");
exports.addHistory = async (req, res) => {
  const history = new History({
    name: req.body.name,
    user: req.user._id,
  });
  await history.save();
  res.json({
    status: true,
    data: history,
  });
};

exports.removeHistory = async (req, res) => {
  const deleteHistory = await History.findOneAndDelete({ _id: req.body._id });
  if (deleteHistory) {
    res.json({
      status: true,
      message: "Deleted",
    });
  } else {
    res.json({ status: false, message: "not able to delete" });
  }
}
  

exports.getHistory = async (req, res) => {
  const history = await History.find({ user: req.user._id }).sort({
    lastDate: -1,
  });
  res.json({
    status: true,
    data: history,
  });
};
