const { UserModel } = require("../../models");

/** DELETE: http://localhost:5000/api/delete_recipe/:_id */
const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(_id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err });
  }
};

module.exports = deleteUser;
