import { create } from "zustand";

export const useThemeStore = create()((set) => ({
  mode: window.localStorage.getItem("theme") || "dark",
  setMode: (mode) => {
    window.localStorage.setItem("theme", mode);
    set({ mode });
  },
}));
