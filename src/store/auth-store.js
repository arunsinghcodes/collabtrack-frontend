import { create } from "zustand";
import { apiFetch } from "@/lib/api";

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  fetchUser: async () => {
    try {
      const res = await apiFetch("/api/v1/auth/current-user");

      if (!res.ok) throw new Error();

      const data = await res.json();
      set({ user: data.data, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },

  login: async (payload) => {
    const res = await apiFetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      throw err;
    }

    apiFetch("/api/v1/auth/current-user", {
      method: "GET",
    });
  },

  logout: async () => {
    await apiFetch("/api/v1/auth/logout", {
      method: "POST",
    });

    set({ user: null });
  },
}));
