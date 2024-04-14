const { RecipeModel } = require("../../models");

/** GET: http://localhost:5000/api/read_recipes_user */
const readRecipeByUser = async (req, res) => {
  try {
    const allRecipes = await RecipeModel.find({ recipeDiscoveryBy: req.userDetails.userName });

    if (!allRecipes || allRecipes.length === 0) {
      return res
        .status(404)
        .send({ error: "No Recipes Found for the specified userName!" });
    }
    return res.status(200).json(allRecipes);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Something went wrong!" });
  }
};

module.exports = readRecipeByUser;
