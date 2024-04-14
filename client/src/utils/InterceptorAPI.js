import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});
api.defaults.headers.common["Authorization"] = Cookies.get("token");
export default api;
