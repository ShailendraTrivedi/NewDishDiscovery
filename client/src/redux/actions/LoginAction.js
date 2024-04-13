import api from "@/utils/InterceptorAPI";
import axios from "axios";

const LoginAction = (values) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/api/read_user", values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

export default LoginAction;
