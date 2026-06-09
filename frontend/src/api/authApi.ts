import api from "./axios";

import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../types/auth";

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const registerUser = async (data: RegisterRequest) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};
