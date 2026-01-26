import { api } from "@/lib/api";

export const loginApi = (payload) =>
  api.post("/auth/login", payload);

export const registerApi = (payload) =>
  api.post("/auth/register", payload);

export const logoutApi = () =>
  api.post("/auth/logout");

export const getCurrentUserApi = () =>
  api.post("/auth/current-user");
