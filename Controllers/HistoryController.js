const History = require("../Models/HistoryModel");

let si;
try {
  si = require("systeminformation");
} catch (err) {
  console.warn(
    "systeminformation module not found. Disk/system info functionality will be disabled."
  );
  si = null; // fallback so app doesn't crash
}

exports.addHistory = async (req, res) => {
  try {
    const history = new History({
      name: req.body.name,
      user: req.user._id,
    });
    await history.save();
    res.json({
      status: true,
      data: history,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

exports.removeHistory = async (req, res) => {
  try {
    const deleteHistory = await History.findOneAndDelete({ _id: req.body._id });
    if (deleteHistory) {
      res.json({ status: true, message: "Deleted" });
    } else {
      res.json({ status: false, message: "Not able to delete" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await History.find({ user: req.user._id }).sort({
      lastDate: -1,
    });
    res.json({ status: true, data: history });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

exports.systeminfo = async (req, res) => {
  try {
    const { userAgent, screenSize } = req.body;

    let modifiedDiskInfo = [];
    if (si) {
      const diskInfo = await si.fsSize();
      modifiedDiskInfo = diskInfo.map((disk) => ({
        ...disk,
        sizeGB: (disk.size / (1024 * 1024 * 1024)).toFixed(2),
        usedGB: (disk.used / (1024 * 1024 * 1024)).toFixed(2),
        availableGB: (disk.available / (1024 * 1024 * 1024)).toFixed(2),
      }));
    } else {
      console.warn(
        "Skipping disk info: systeminformation module not available."
      );
    }

    const systemInfo = {
      userAgent,
      screenSize,
      modifiedDiskInfo,
    };

    console.log("Received client info:", systemInfo);
    res.json(systemInfo);
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
