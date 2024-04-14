import api from "@/utils/InterceptorAPI";
import { UploadImageFirebase } from "@/components";
import { failureCreateRecipe, requestCreateRecipe, successCreateRecipe } from "../reducers/UserRecipeReducer";

const CreateRecipeAction = (values) => {
  return async (dispatch) => {
    dispatch(requestCreateRecipe());
    try {
      const cloudImageURL = await UploadImageFirebase(values.recipeImage);
      delete values.recipeImage;
      values.recipeImage = cloudImageURL;
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
