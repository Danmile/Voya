import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

interface City {
  name: string;
}

interface Attraction {
  name: string;
  image: string;
  description: string;
  address: string;
}

interface AttractionState {
  cities: City[] | null;
  attractions: Attraction[] | null;

  getCities: (city: string) => Promise<void>;
  getAttractions: (city: string) => Promise<void>;
}

export const useAttractionStore = create<AttractionState>((set, get) => ({
  cities: null,
  attractions: null,

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
  getAttractions: async (data) => {
    try {
      const res = await axiosInstance.get("/attraction/attractions", {
        params: {
          destination: data,
        },
      });
      set({ attractions: res.data });
    } catch (error) {
      console.error("Error in getAttractions", error);
    }
  },
}));
