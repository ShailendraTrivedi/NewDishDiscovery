"use client";

import { createSlice } from "@reduxjs/toolkit";

const AuthReducer = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    loading: false,
    data: null,
  },
  reducers: {
    requestAuth: (state) => {
      state.loading = true;
    },
    successAuth: (state, action) => {
      state.auth = true;
      state.loading = false;
      state.data = action.payload;
      localStorage.setItem("auth", true);
      localStorage.setItem("userName", state.data.userName);
      localStorage.setItem("userEmail", state.data.userEmail);
    },
    failureAuth: (state) => {
      state.loading = false;
    },
    logoutAuth: (state) => {
      state.auth = false;
      state.loading = false;
      state.data = null;
    },
  },
});

export const { requestAuth, successAuth, failureAuth, logoutAuth } =
  AuthReducer.actions;
export default AuthReducer.reducer;
