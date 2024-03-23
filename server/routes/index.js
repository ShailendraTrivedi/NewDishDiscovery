const { Router } = require("express");
const createRecipe = require("../controllers/createRecipe");
const getRecipes = require("../controllers/getRecipes");
const Routes = Router();

Routes.get("/get_recipes", getRecipes);
Routes.post("/create_recipe", createRecipe);

module.exports = Routes;