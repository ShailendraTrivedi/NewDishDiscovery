import api from "@/utils/InterceptorAPI";
import axios from "axios";
import {
  failureSearchRecipes,
  requestSearchRecipes,
  successSearchRecipes,
} from "../reducers/AllRecipeReducer";

const SearchRecipesAction = (searchRecipe) => {
  return async (dispatch) => {
    dispatch(requestSearchRecipes());
    try {
      const response = await api.get(
        `/api/search_recipe/${searchRecipe}`
      );
      if (response.status === 200) {
        console.log(
          `🚀 ~ file: SearchRecipesAction.js:11 ~ return ~ response:\n =>`,
          response
        );
        dispatch(successSearchRecipes(response.data));
      }
    } catch (error) {
      dispatch(failureSearchRecipes());
    }
  };
};
export default SearchRecipesAction;
