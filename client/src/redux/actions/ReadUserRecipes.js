import api from "@/utils/InterceptorAPI";
import { failureReadRecipes, requestReadRecipes, successReadRecipes } from "../reducers/UserRecipeReducer";

const ReadUserRecipes = () => {
  return async (dispatch) => {
    dispatch(requestReadRecipes());
    try {
      const response = await api.get("/api/read_recipes_user");
      if (response.status === 200) {
        dispatch(successReadRecipes(response.data));
      }
    } catch (error) {
      dispatch(failureReadRecipes());
    }
  };
};
export default ReadUserRecipes;
