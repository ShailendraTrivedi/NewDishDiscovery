import api from "@/utils/InterceptorAPI";
import {
  failureCreateRecipe,
  successCreateRecipe,
  requestCreateRecipe,
} from "../reducers/CreateReducer";
import { UploadImageFirebase } from "@/components";

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
