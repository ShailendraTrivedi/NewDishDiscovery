import api from "@/utils/InterceptorAPI";
import {
  failureCreateRecipe,
  successCreateRecipe,
  requestCreateRecipe,
} from "../reducers/CreateReducer";

const CreateRecipeAction = (values) => {
  return async (dispatch) => {
    dispatch(requestCreateRecipe());
    try {
      const response = await api.post("/api/create_recipe", values);
      if (response.status === 200) {
        dispatch(successCreateRecipe(values));
      }
    } catch (error) {
      dispatch(failureCreateRecipe());
    }
  };
};
export default CreateRecipeAction;
