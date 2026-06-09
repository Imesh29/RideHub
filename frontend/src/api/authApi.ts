import api from "./axios";

import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../types/auth";

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await api.post("/api/v1/auth/login", data);

  return response.data;
};

export const registerUser = async (data: RegisterRequest) => {
  const response = await api.post("/api/v1/auth/register", data);

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/api/v1/auth/me");

  return response.data;
};
