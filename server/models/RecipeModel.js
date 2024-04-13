const mongoose = require("mongoose");

// Define the Comment schema
const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

// Define the Recipe schema
const recipeSchema = new mongoose.Schema({
  recipeDiscoveryBy: {
    type: String,
    required: true,
  },
  recipeImage: {
    type: String,
    required: true,
  },
  recipeTitle: {
    type: String,
    required: true,
  },
  recipeCategory: {
    type: String,
    required: true,
  },
  recipeIntroduction: {
    type: String,
    required: true,
  },
  recipeCookingTime: {
    type: String,
    required: true,
  },
  recipeOrigin: {
    type: String,
    required: true,
  },
  recipeServing: {
    type: String,
    required: true,
  },
  recipeIngredient: {
    type: [String],
    required: true,
  },
  recipeInstructions: {
    type: [String],
    required: true,
  },
  publishDate: {
    type: Date, 
    default: Date.now,
  },
  recipeComments: {
    type: [commentSchema],
    required: false,
    default: [], 
  },
  recipeLikes: {
    type: Number, 
    required: false,
    default: 0,
  },
});

const RecipeModel = mongoose.model("Recipes", recipeSchema);

module.exports = RecipeModel;
