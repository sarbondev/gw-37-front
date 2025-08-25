import { create } from "zustand";

export const useAuthStore = create(() => ({
  user: JSON.parse(localStorage.getItem("coinshoptoken")) || null,
  isAuth: localStorage.getItem("coinshoptoken") ? true : false,
}));
