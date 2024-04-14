const { setToken } = require("../../middlewares/TokenAuth");
const { UserModel } = require("../../models");
const bcrypt = require("bcrypt");

/** POST: http://localhost:5000/api/read_user */
const readUser = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    let user = await UserModel.findOne({ userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(
      userPassword,
      user.userPassword
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const userDetails = {
      userName: user.userName,
      userEmail: user.userEmail,
    };
    const token = setToken(user);
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: "none",
      secure: true,
    });
    return res.status(200).json({ message: "Login successful", userDetails });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Something went wrong!" });
  }
};

module.exports = readUser;
