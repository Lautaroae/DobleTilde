const User = require("../models/User");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.signup = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  user.save((error, user) => {
    console.log("reached signup endpoint");
    if (error) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user,
    });
  });
};
