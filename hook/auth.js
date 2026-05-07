import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const registerRequest = async (userData) => {
  const response = await api.post("/auth/register", userData);

  return response.data;
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerRequest,
    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken);
      queryClient.setQueryData(["me"], data.user);
    },
    onError: (error) => {
      console.log("Register error:", error);
    },
  });
};

const loginRequest = async (data) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken);
      queryClient.setQueryData(["me"], data.user);
    },
    onError: (error) => {
      console.log("Login error:", error);
    },
  });
};



const logoutRequest = () => {
  const request = api.post("/auth/logout");
  return request.response;
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      clearTokens();
      queryClient.setQueriesData(["me"]);
    },
    onError: (error) => {
      console.log("Logout error:", error);
    },
  });
};