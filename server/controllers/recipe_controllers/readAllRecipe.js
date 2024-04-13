const { RecipeModel } = require("../../models");

/** GET: http://localhost:5000/api/read_all_recipes */
const readAllRecipe = async (req, res) => {
  try {
    const allRecipes = await RecipeModel.find();

    if (!allRecipes || allRecipes.length === 0) {
      return res.status(404).send({ error: "No Recipe Found!" });
    }

    return res.status(200).json(allRecipes);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Something went wrong!" });
  }
};

module.exports = readAllRecipe;
