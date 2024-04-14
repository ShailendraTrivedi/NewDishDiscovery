import api from "@/utils/InterceptorAPI";
import axios from "axios";
import { failureReadAllRecipes, requestReadAllRecipes, successReadAllRecipes } from "../reducers/AllRecipeReducer";

const ReadAllRecipesAction = (values) => {
  return async (dispatch) => {
    dispatch(requestReadAllRecipes());
    try {
      const response = await api.get("/api/read_all_recipes");
      if (response.status === 200) {
        dispatch(successReadAllRecipes(response.data));
      }
    } catch (error) {
      dispatch(failureReadAllRecipes());
    }
  };
};
export default ReadAllRecipesAction;
