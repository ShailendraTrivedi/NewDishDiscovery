const { UserModel } = require("../models");
const { getToken } = require("./TokenAuth");
const bcrypt = require("bcrypt");

async function CheckAuth(req, res, next) {
  try {
    let token;

    // Check if token is provided in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } 
    // If not in headers, check if it's stored in cookies
    else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }
    
    // Verify and decode the token
    const decodedToken = getToken(token);
    if (!decodedToken) {
      return res.status(401).json({ error: "Invalid authorization token" });
    }

    const { _id, userName, userEmail } = decodedToken;

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

