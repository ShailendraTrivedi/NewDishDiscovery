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
const Routes = Router();

Routes.get("/read_all_recipes", readAllRecipe);
Routes.get("/read_recipe/:id", readRecipe);
Routes.post("/create_recipe", createRecipe);
Routes.put("/update_recipe", updateRecipe);
Routes.delete("/delete_recipe/:_id", deleteRecipe);

Routes.post("/create_user", createUser);
Routes.post("/read_user", readUser);
Routes.put("/update_user", CheckAuth, updateUser);
Routes.delete("/delete_user/:_id", CheckAuth, deleteUser);

module.exports = Routes;
