import { create } from "zustand";

export const useUIStore = create((set) => ({
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

    if (saved !== null) {
      set({
        collapsed: saved === "true",
        hydrated: true,
      });
      return;
    }

    const isMobile = window.innerWidth < 1024;

    set({
      collapsed: isMobile,
      hydrated: true,
    });
  },
}));
