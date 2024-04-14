"use client";
import api from "@/utils/InterceptorAPI";
import axios from "axios";
import { failureAuth, requestAuth, successAuth } from "../reducers/AuthReducer";

const LoginAction = (router, values) => {
  return async (dispatch) => {
    dispatch(requestAuth());
    try {
      const response = await api.post("/api/read_user", values);
      if (response.status === 200) {
        dispatch(successAuth(response.data.userDetails));
        router.push("/");
      }
    } catch (error) {
      dispatch(failureAuth())
    }
  };
};

export default LoginAction;
