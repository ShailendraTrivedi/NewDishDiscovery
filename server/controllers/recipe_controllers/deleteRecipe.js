const { RecipeModel } = require("../../models");

/** DELETE: http://localhost:5000/api/delete_recipe/:_id */
const deleteRecipe = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedRecipe = await RecipeModel.findByIdAndDelete(_id);
    console.log(deletedRecipe);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    return res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err });
  }
};

module.exports = deleteRecipe;
