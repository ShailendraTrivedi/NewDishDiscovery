const { RecipeModel } = require("../../models");

/** PUT: http://localhost:5000/api/update_recipe */
const updateRecipe = async (req, res) => {
  try {
    const { _id } = req.body;
    const updatedRecipeData = req.body;
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      _id,
      updatedRecipeData,
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    return res
      .status(200)
      .json({ message: "Recipe updated successfully", updatedRecipe });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err });
  }
};

module.exports = updateRecipe;
