import { create } from "zustand";
import apiRequest from "./apiRequest";

export const useNotificationStore = create((set) => ({
  count: 0,
  fetch: async () => {
    const res = await apiRequest.get("/users/notification");
    set({ count: res.data.data });
  },
  decrease: () => {
    set((prev) => ({ count: prev.count - 1 }));
  },
  reset: () => {
    set({ count: 0 });
  },
}));
