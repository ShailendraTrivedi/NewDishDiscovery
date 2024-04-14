"use client";
import { Recipes_Data } from "@/assets/data";

import { createSlice } from "@reduxjs/toolkit";

const UserRecipeReducer = createSlice({
  name: "recipes",
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {
    requestCreateRecipe: (state) => {
      state.loading = true;
    },
    successCreateRecipe: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    },
    failureCreateRecipe: (state) => {
      state.loading = false;
    },
    requestReadRecipes: (state) => {
      state.loading = true;
    },
    successReadRecipes: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    failureReadRecipes: (state) => {
      state.loading = false;
    },
    requestEditRecipe: (state) => {
      state.loading = true;
    },
    successEditRecipe: (state, action) => {
      state.loading = false;
      const _idEditRecipe = action.payload._id;
      state.data = state.map((recipe) =>
        recipe._id === _idEditRecipe ? action.payload : recipe
      );
    },
    failureEditRecipe: (state) => {
      state.loading = false;
    },
    requestDeleteRecipe: (state) => {
      state.loading = true;
    },
    successDeleteRecipe: (state, action) => {
      state.loading = false;
      const _idDeleteRecipe = action.payload._id;
      state.data = state.data.filter(
        (recipe) => recipe._id !== _idDeleteRecipe
      );
    },
    failureDeleteRecipe: (state) => {
      state.loading = false;
    },
    
  },
});

export const {
  requestCreateRecipe,
  successCreateRecipe,
  failureCreateRecipe,
  requestEditRecipe,
  successEditRecipe,
  failureEditRecipe,
  requestReadRecipes,
  successReadRecipes,
  failureReadRecipes,
  requestDeleteRecipe,
  successDeleteRecipe,
  failureDeleteRecipe,
} = UserRecipeReducer.actions;
export default UserRecipeReducer.reducer;
