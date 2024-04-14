const { UserModel } = require("../models");
const { getToken } = require("./TokenAuth");
const bcrypt = require("bcrypt");

async function CheckAuth(req, res, next) {
  try {
    let token = req.headers.cookie;
    token = token.split("=")[1];

    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }
    const { _id, userName, userEmail } = getToken(token);
    if (!_id || !userName || !userEmail) {
      return res.status(401).json({ error: "Invalid authorization token" });
    }

    const existingUser = await UserModel.findById(_id);

    if (
      !existingUser ||
      existingUser.userName !== userName ||
      existingUser.userEmail !== userEmail
    ) {
      return res.status(401).json({ error: "Unauthorized access" });
    }
    req.userDetails = { _id, userName, userEmail };

    next();
  } catch (error) {
    console.error("CheckAuth Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = CheckAuth;
