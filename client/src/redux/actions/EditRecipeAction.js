const {
  failureEditRecipe,
  requestEditRecipe,
} = require("../reducers/UserRecipeReducer");

const EditRecipeAction = (values) => {
  return async (dispatch) => {
    dispatch(requestEditRecipe());
    try {
      dispatch(requestEditRecipe(values));
    } catch (error) {
      dispatch(failureEditRecipe());
    }
  };
};
