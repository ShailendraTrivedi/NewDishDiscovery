const { RecipeModel } = require("../../models");

/** GET: http://localhost:5000/api/read_recipe/:id */
const readRecipe = async (req, res) => {
  try {
    const { _id } = req.params;
    const recipe = await RecipeModel.findById(_id);
    if (!recipe) {
      return res.status(404).send({ error: "Recipe not found" });
    }
    return res.status(200).json(recipe);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Something went wrong!" });
  }
};

module.exports = readRecipe;
