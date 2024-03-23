import {
  failureCreateRecipe,
  successCreateRecipe,
  requestCreateRecipe,
} from "../reducers/CreateReducer";

const CreateRecipeAction = (values) => {
  return async (dispatch) => {
    dispatch(requestCreateRecipe());
    try {
      dispatch(successCreateRecipe(values));
    } catch (error) {
      dispatch(failureCreateRecipe());
    }
  };
};
export default CreateRecipeAction;
