const {
  failureEditRecipe,
  requestEditRecipe,
} = require("../reducers/CreateReducer");

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
