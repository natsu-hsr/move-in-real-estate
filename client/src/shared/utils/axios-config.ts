import axios from "axios";

export const setupAxiosConfiguration = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}
