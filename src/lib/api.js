import axios from "axios";

export const api = axios.create({
  baseURL: "https://collabtrack-api.onrender.com/api/v1",
  withCredentials: true, // refresh token cookie
});
