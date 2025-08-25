import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuth: true,
  login: (user) => set({ user, isAuth: true }),
  logout: () => set({ user: null, isAuth: false }),
}));
