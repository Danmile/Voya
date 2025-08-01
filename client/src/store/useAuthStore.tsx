import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

interface AuthState {
  authUser: object | null;
  isLogging: boolean;
  isCheckingAuth: boolean;
  checkingAuth: boolean;
  login: (data: any) => Promise<void>;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
  register: (data: any) => Promise<void>;
  forgotPassword: (data: any) => Promise<void>;
  resetPassword: (data: any, resetToken: string | undefined) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  authUser: null,
  isLogging: false,
  isCheckingAuth: false,
  checkingAuth: true,

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
    set({ checkingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data, checkingAuth: false });
    } catch (error: any) {
      if (error.response?.status === 401) {
        set({ authUser: null, checkingAuth: false });
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
  forgotPassword: async (data) => {
    try {
      const res = await axiosInstance.post("auth/forgot-password", data);
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  },
  resetPassword: async (data, resetToken) => {
    try {
      const res = await axiosInstance.post(
        `/auth/reset-password/${resetToken}`,
        data
      );
      set({ authUser: res.data });
      toast.success("Password changed successfully");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  },
}));
