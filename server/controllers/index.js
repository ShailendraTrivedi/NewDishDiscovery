// recipe_controllers
const createRecipe = require("./recipe_controllers/createRecipe");
const readRecipe = require("./recipe_controllers/readRecipes");
const readAllRecipe = require("./recipe_controllers/readAllRecipe");
const deleteRecipe = require("./recipe_controllers/deleteRecipe");
const updateRecipe = require("./recipe_controllers/updateRecipe");

// user_controllers
const createUser = require("./user_controllers/createUser");
const readUser = require("./user_controllers/readUser");
const updateUser = require("./user_controllers/updateUser");
const deleteUser = require("./user_controllers/deleteUser");

module.exports = {
  createRecipe,
  readAllRecipe,
  readRecipe,
  updateRecipe,
  deleteRecipe,
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
