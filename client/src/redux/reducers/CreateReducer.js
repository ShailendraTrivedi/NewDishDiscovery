"use client";
import { Recipes_Data } from "@/assets/data";

import { createSlice } from "@reduxjs/toolkit";

const CreateReducer = createSlice({
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
    requestReadAllRecipes: (state) => {
      state.loading = true;
    },
    successReadAllRecipes: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    failureReadAllRecipes: (state) => {
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
  requestReadAllRecipes,
  successReadAllRecipes,
  failureReadAllRecipes,
  requestDeleteRecipe,
  successDeleteRecipe,
  failureDeleteRecipe,
} = CreateReducer.actions;
export default CreateReducer.reducer;
