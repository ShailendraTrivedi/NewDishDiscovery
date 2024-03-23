import {
  failureDeleteRecipe,
  requestDeleteRecipe,
  successDeleteRecipe,
} from "../reducers/CreateReducer";

const DeleteRecipeAction = (values) => {
  return async (dispatch) => {
    dispatch(requestDeleteRecipe());
    try {
      dispatch(successDeleteRecipe(values));
    } catch (error) {
      dispatch(failureDeleteRecipe());
    }
  };
};

export default DeleteRecipeAction;
