import api from "@/utils/InterceptorAPI";
import {
  requestReadAllRecipes,
  successReadAllRecipes,
  failureReadAllRecipes,
} from "../reducers/CreateReducer";
import axios from "axios";

const ReadAllRecipesAction = (values) => {
  return async (dispatch) => {
    dispatch(requestReadAllRecipes());
    try {
      const response = await axios.get("http://localhost:5000/api/read_all_recipes");
      if (response.status === 200) {
        dispatch(successReadAllRecipes(response.data));
      }
    } catch (error) {
      dispatch(failureReadAllRecipes());
    }
  };
};
export default ReadAllRecipesAction;
