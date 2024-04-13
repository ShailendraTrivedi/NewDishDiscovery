import { createSlice } from require("@reduxjs/toolkit");

const AuthReducer = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {
    requestLogin: (state) => {
      state.loading = true;
    },
    successLogin: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    failureLogin: (state) => {
      state.loading = false;
    },
  },
});

export const { requestLogin, successLogin, failureLogin } = AuthReducer.actions;
export default AuthReducer.reducer;
