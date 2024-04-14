"use client";

import { createSlice } from "@reduxjs/toolkit";
const isBrowser = typeof window !== "undefined";
const AuthReducer = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    loading: false,
  },
  reducers: {
    requestAuth: (state) => {
      state.loading = true;
    },
    successAuth: (state, action) => {
      state.auth = true;
      state.loading = false;
      if (isBrowser) {
        localStorage.setItem("auth", true);
      }
    },
    failureAuth: (state) => {
      state.loading = false;
    },
    logoutAuth: (state) => {
      state.auth = false;
      state.loading = false;
    },
  },
});

export const { requestAuth, successAuth, failureAuth, logoutAuth } =
  AuthReducer.actions;
export default AuthReducer.reducer;
