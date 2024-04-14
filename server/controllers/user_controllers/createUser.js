const { response } = require("express");
const { setToken } = require("../../middlewares/TokenAuth");
const { UserModel } = require("../../models");

/** POST: http://localhost:5000/api/create_user */
const createUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const existingUsername = await UserModel.findOne({ userName });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists!" });
    }

    const existingEmail = await UserModel.findOne({ userEmail });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    const newUser = new UserModel({
      userName,
      userEmail,
      userPassword,
    });

    const result = await newUser.save();
    const token = setToken(newUser);
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: "none",
      secure: true,
    });

    const userDetails = {
      userName,
      userEmail,
    };

    return res
      .status(201)
      .json({ message: "User created successfully", userDetails });
  } catch (err) {
    console.error("Error creating user:", err);
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err });
  }
};

module.exports = createUser;
