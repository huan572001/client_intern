import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://server-laravel.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  // paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosClient;
