import api from "@/utils/InterceptorAPI";
import {
  failureDeleteRecipe,
  requestDeleteRecipe,
  successDeleteRecipe,
} from "../reducers/UserRecipeReducer";

const DeleteRecipeAction = (values) => {
  return async (dispatch) => {
    const response = await api.delete(`/api/delete_recipe/${values._id}`);
    dispatch(requestDeleteRecipe());
    try {
      dispatch(successDeleteRecipe(values));
    } catch (error) {
      dispatch(failureDeleteRecipe());
    }
  };
};

export default DeleteRecipeAction;
