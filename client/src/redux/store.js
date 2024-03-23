import { configureStore } from "@reduxjs/toolkit";
import CreateReducer from "./reducers/CreateReducer";

const store = configureStore({
  reducer: {
    storeRecipe: CreateReducer,
  },
});
export default store;
