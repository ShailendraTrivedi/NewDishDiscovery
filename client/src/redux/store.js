import { configureStore } from "@reduxjs/toolkit";
import CreateReducer from "./reducers/CreateReducer";
import AuthReducer from "./reducers/AuthReducer";

const store = configureStore({
  reducer: {
    storeRecipe: CreateReducer,
    storeAuth: AuthReducer,
  },
});
export default store;
