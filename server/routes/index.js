const { Router } = require("express");
const {
  createRecipe,
  readRecipe,
  readAllRecipe,
  updateRecipe,
  deleteRecipe,
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../controllers");
const CheckAuth = require("../middlewares/CheckAuth");
const readRecipeByUser = require("../controllers/recipe_controllers/readRecipeByUser");
const searchRecipe = require("../controllers/recipe_controllers/searchRecipe");
const Routes = Router();

Routes.get("/read_all_recipes", readAllRecipe);
Routes.get("/read_recipes_user", CheckAuth, readRecipeByUser);
Routes.get("/search_recipe/:search", searchRecipe);
Routes.get("/read_recipe/:id", readRecipe);
Routes.post("/create_recipe", CheckAuth, createRecipe);
Routes.put("/update_recipe", CheckAuth, updateRecipe);
Routes.delete("/delete_recipe/:_id", CheckAuth, deleteRecipe);

Routes.post("/create_user", createUser);
Routes.post("/read_user", readUser);
Routes.put("/update_user", CheckAuth, updateUser);
Routes.delete("/delete_user/:_id", CheckAuth, deleteUser);

module.exports = Routes;
