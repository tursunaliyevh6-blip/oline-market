import axios from "axios";
import Cokie from "js-cookie";

export const baseURL= "http://localhost:5000"

const setTokens = (accessToken, refreshToken) => {
  Cokie.set("accessToken", accessToken, {expires:3650} )
  Cokie.set("refreshToken", accessToken, {expires:3650})
}

const clearTokens = () => {
  Cokie.remove("accessToken");
  Cokie.remove("refreshToken");
};

const api = axios.create({
  baseURL
});

api.interceptors.request.use((config) => {
  const accessToken = Cokie.get("accessToken");

  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cokie.get("refreshToken");

        const res = await axios.post(`${baseURL}/auth/refresh`, {
          refreshToken,
        });

        const newAccessToken = res.data.accessToken;

        Cookies.set("accessToken", newAccessToken, { expires: 3650 });
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        clearTokens();
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);