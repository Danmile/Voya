import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

interface AuthState {
  authUser: object | null;
  isLogging: boolean;
  isCheckingAuth: boolean;
  login: (data: any) => Promise<void>;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
  register: (data: any) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  authUser: null,
  isLogging: false,
  isCheckingAuth: false,

  login: async (data) => {
    set({ isLogging: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Signed in successfully");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLogging: false });
    }
  },
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error: any) {
      if (error.response?.status === 401) {
        set({ authUser: null });
      } else {
        console.error("Error in checkAuth", error);
      }
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Signed out successfully");
    } catch (error) {
      console.error("Error in logout:", error);
    }
  },
  register: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/register", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      console.error("Error in register store: ", error);
    }
  },
}));
