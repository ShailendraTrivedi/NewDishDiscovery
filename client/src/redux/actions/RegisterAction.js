"use client";
import api from "@/utils/InterceptorAPI";
import axios from "axios";
import { failureAuth, requestAuth, successAuth } from "../reducers/AuthReducer";

const RegisterAction = (router, values) => {
  return async (dispatch) => {
    dispatch(requestAuth());
    try {
      const response = await api.post("api/create_user", values);
      if (response.status === 201) {
        dispatch(successAuth(response.data.userDetails));
        router.push("/")
      }
    } catch (error) {
      dispatch(failureAuth())
    }
  };
};

export default RegisterAction;
