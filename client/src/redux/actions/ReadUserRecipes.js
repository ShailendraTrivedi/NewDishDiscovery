import api from "@/utils/InterceptorAPI";
import {
  requestReadAllRecipes,
  successReadAllRecipes,
  failureReadAllRecipes,
} from "../reducers/CreateReducer";
import axios from "axios";

const ReadUserRecipes = () => {
  return async (dispatch) => {
    dispatch(requestReadAllRecipes());
    try {
      const response = await api.get("/api/read_recipes_user");
      if (response.status === 200) {
        dispatch(successReadAllRecipes(response.data));
      }
    } catch (error) {
      dispatch(failureReadAllRecipes());
    }
  };
};
export default ReadUserRecipes;
