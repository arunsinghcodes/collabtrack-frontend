import { create } from "zustand";
import { api } from "@/lib/api";

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  setLoading: (value) => set({ loading: value }),

  fetchUser: async () => {
    try {
      const res = await api.post("/auth/current-user");

      set({
        user: res.data.data,
        loading: false,
      });
    } catch {
      set({
        user: null,
        loading: false,
      });
    }
  },

  login: async (payload) => {
    const res = await api.post("/auth/login", payload);

    const accessToken = res.data.data.accessToken;

    localStorage.setItem("accessToken", accessToken);

    const userRes = await api.post("/auth/current-user");

    set({
      user: userRes.data.data,
      loading: false,
    });
  },

  // logout: async () => {
  //   await api.post("/auth/logout");
  //   localStorage.removeItem("accessToken");

  //   set({
  //     user: null,
  //     loading: false,
  //   });
  // },

  logout: async () => {
    try {
      await api.post("/auth/logout");
    } catch (e) {
      // ignore backend failure
    }

    localStorage.removeItem("accessToken");

    set({
      user: null,
      loading: false,
    });

    window.location.href = "/login";
  },
}));
