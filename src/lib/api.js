import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://collabtrack-api.onrender.com";

export async function apiFetch(
  url,
  options = {}
) {
  const res = await fetch(`${BASE_URL}${url}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (res.status === 401) {
    await fetch(`${BASE_URL}/api/v1/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });

    return apiFetch(url, options);
  }

  return res;
}

export const api = axios.create({
  baseURL: "https://collabtrack-api.onrender.com/api/v1",
  withCredentials: true, // 🔥 REQUIRED for refresh token cookie
});
