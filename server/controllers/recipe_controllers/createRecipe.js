const { RecipeModel } = require("../../models");

/** POST: http://localhost:5000/api/create_recipe */
const createRecipe = async (req, res) => {
  try {
    const recipe = req.body;
    recipe = {...recipe, recipeDiscoveryBy: req.userDetails.userName}
    const newRecipe = new RecipeModel(recipe);
    const result = await newRecipe.save();
    return res.status(200).json({ message: "Blog Added Successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err });
  }
};

module.exports = createRecipe;
