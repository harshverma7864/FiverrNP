import axios from "axios";
import Cookies from "js-cookie";

const baseURL = 'https://np-django-4f1d7b37ade6.herokuapp.com/';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor for setting the Authorization header with the access token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an interceptor for handling token refresh
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;

    if (originalConfig.url !== baseURL + "login-new" && error.response) {
      // Access Token was expired
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const response = await axiosInstance.post("refresh", {
            refresh: sessionStorage.getItem("refresh"),
          });

          const { access_token } = response.data; // Use response.data directly

          sessionStorage.setItem("access", access_token);
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

          return axiosInstance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
