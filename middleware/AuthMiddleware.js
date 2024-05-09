const jwt = require("jsonwebtoken")
const User = require("../Models/UserModel")

exports.auth = async function (req, res, next) {
    let token;
    // console.log(req.headers)
    if (req.headers["auth-token"]) {
        token = req.headers["auth-token"];
    } else {
        return res.json({
            status: false,
            message:"Users not logged in"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.user.id);
        // console.log(req.user);
        next()
    } catch (error) {
        return res.json({
          status: false,
          message: error.message,
        });
    }
}