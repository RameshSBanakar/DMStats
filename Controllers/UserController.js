const express = require("express");
const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ status: false, message: "User Not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.json({status:false,message:"credentials are not correct"})
    }
    const payload = { user: { id: user.id } };
    const token = await jwt.sign(payload, process.env.JWT_SECRET);
    return res.status(200).json({
      status: true,
      message: "User Logged in success",
      token: token,
      userName:user.userName
    });

  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
exports.userSignup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      return res.json({ status: false, message: "Email id alredy registered" });
    }
    const hashPass = await bcrypt.hash(password, 10);

    user = new User({
      userName: userName,
      email: email,
      password: hashPass,
    });
    await user.save();
    const payload = { user: { id: user.id } };
    const token = await jwt.sign(payload, process.env.JWT_SECRET);
    return res.status(201).json({
      status: true,
      message: "User registration success",
      token: token,
      userName: user.userName,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
