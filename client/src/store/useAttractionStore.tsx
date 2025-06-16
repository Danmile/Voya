import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

interface City {
  name: string;
}

interface AttractionState {
  cities: City[] | null;

  getCities: (city: string) => Promise<void>;
}

export const useAttractionStore = create<AttractionState>((set, get) => ({
  cities: null,

  getCities: async (data) => {
    try {
      const res = await axiosInstance.get("/attraction/cities", {
        params: {
          city: data,
        },
      });
      set({ cities: res.data });
    } catch (error) {
      console.error("Error in getDestinations", error);
    }
  },
}));
