import { create } from "zustand";
import { api } from "@/lib/api";

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: true,

  fetchUser: async () => {
    if (get().loading === false && get().user) return;

    try {
      const res = await api.post("/auth/current-user");
      set({ user: res.data.data, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },

  login: async (payload) => {
    try {
      await api.post("/auth/login", payload);
      const userRes = await api.post("/auth/current-user");

      set({
        user: userRes.data.data,
        loading: false,
      });

      return true;
    } catch {
      return false;
    }
  },

  logout: async () => {
    try {
      await api.post("/auth/logout");
    } catch (e) {
      // ignore backend failure
    }

    set({
      user: null,
      loading: false,
    });

    window.location.href = "/login";
  },
}));
