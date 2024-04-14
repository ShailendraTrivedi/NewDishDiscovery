import { configureStore } from "@reduxjs/toolkit";
import AllRecipeReducer from "./reducers/AllRecipeReducer";
import AuthReducer from "./reducers/AuthReducer";
import UserRecipeReducer from "./reducers/UserRecipeReducer";

const store = configureStore({
  reducer: {
    storeRecipes: AllRecipeReducer,
    storeCookbook: UserRecipeReducer,
    storeAuth: AuthReducer,
  },
});
export default store;
