"use client";
import { createSlice } from "@reduxjs/toolkit";

const AllRecipeReducer = createSlice({
  name: "recipes",
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {
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
    requestSearchRecipes: (state) => {
      state.loading = true;
    },
    successSearchRecipes: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    failureSearchRecipes: (state) => {
      state.loading = false;
    },
  },
});

export const {
  requestReadAllRecipes,
  successReadAllRecipes,
  failureReadAllRecipes,
  requestSearchRecipes,
  successSearchRecipes,
  failureSearchRecipes,
} = AllRecipeReducer.actions;
export default AllRecipeReducer.reducer;
