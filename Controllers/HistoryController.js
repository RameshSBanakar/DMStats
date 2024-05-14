const History = require("../Models/HistoryModel");
const si = require("systeminformation");
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
exports.systeminfo =async (req,res) => {
  const { userAgent, screenSize } = req.body;
  const diskInfo = await si.fsSize();
  console.log((diskInfo[0].size)/Math.pow(1024,3));
  console.log(diskInfo[0].used / Math.pow(1024, 3));
  console.log(diskInfo[0].available / Math.pow(1024, 3));
  const modifiedDiskInfo = diskInfo.map((disk) => ({
    ...disk,
    sizeGB: (disk.size / (1024 * 1024 * 1024)).toFixed(2), // Convert size to GB
    usedGB: (disk.used / (1024 * 1024 * 1024)).toFixed(2), // Convert used space to GB
    availableGB: (disk.available / (1024 * 1024 * 1024)).toFixed(2), // Convert available space to GB
  }));

  const systemInfo = {
    userAgent,
    screenSize,
    modifiedDiskInfo,
    // Add more system information as needed
  };
  console.log("Received client info:", systemInfo);
  res.json(systemInfo);
};
