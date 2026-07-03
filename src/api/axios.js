import axios from "axios";

const api = axios.create({
  baseURL:import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = "Something went wrong.";

    if (error.response?.data?.message) {
      message = error.response.data.message;
    } else if (error.code === "ECONNABORTED") {
      message = "Request timed out.";
    } else if (!error.response) {
      message = "Network Error.";
    }

    return Promise.reject({
      ...error,
      message,
    });
  }
);

export default api;