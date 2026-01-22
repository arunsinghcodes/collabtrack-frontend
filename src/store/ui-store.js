import { create } from "zustand";

export const useUIStore = create((set, get) => ({
  collapsed: false,
  sidebarOpen: false,
  hydrated: false,

  toggleCollapse: () =>
    set((state) => {
      const next = !state.collapsed;
      localStorage.setItem("sidebar-collapsed", String(next));
      return { collapsed: next };
    }),

  openSidebar: () => set({ sidebarOpen: true }),
  closeSidebar: () => set({ sidebarOpen: false }),

  hydrate: () => {
    const saved = localStorage.getItem("sidebar-collapsed");

    set({
      collapsed: saved === "true",
      hydrated: true,
    });
  },
}));
