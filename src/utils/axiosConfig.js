import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://beta-lis.onrender.com/api/v1",
});
