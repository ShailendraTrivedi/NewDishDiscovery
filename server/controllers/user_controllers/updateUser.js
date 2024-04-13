const { UserModel } = require("../../models");

/** DELETE: http://localhost:5000/api/delete_user/:_id */
const updateUser = async (req, res) => {
  try {
    const { _id } = req.body;
    const updatedUserDetails = req.body;
    const newUpdatedUser = new UserModel(updatedUserDetails);
    const updatedUser = await UserModel.findByIdAndUpdate(_id, newUpdatedUser, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(201)
      .json({ message: "User updated successfully", updatedUser });
  } catch (err) {
    console.error("Error creating user:", err);
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err });
  }
};

module.exports = updateUser;
