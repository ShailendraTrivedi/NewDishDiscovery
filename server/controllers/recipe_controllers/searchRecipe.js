const { RecipeModel } = require("../../models");

/** GET: http://localhost:5000/api/search_recipe/:search */
const searchRecipe = async (req, res) => {
  try {
    const { search } = req.params;

    if (!search) {
      return res.status(400).send({ error: "Search query parameter is required!" });
    }

    const regex = new RegExp(search, 'i'); // Case-insensitive search
    const foundRecipes = await RecipeModel.find({ recipeTitle: regex });

    if (!foundRecipes || foundRecipes.length === 0) {
      return res.status(404).send({ error: "No Recipes Found matching the search query!" });
    }

    return res.status(200).json(foundRecipes);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Something went wrong!" });
  }
};

module.exports = searchRecipe;
