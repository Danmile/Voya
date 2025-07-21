import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../lib/axios";

interface City {
  name: string;
  imageUrl: string;
}

export interface Attraction {
  name: string;
  image: string;
  description: string;
  address: string;
  lat: number;
  lon: number;
}

interface Time {
  startDate: string | null;
  endDate: string | null;
}

interface Trip {
  attractions: Attraction[];
  time: Time;
  budget: number;
}

interface Country {
  name: string;
  code: string;
  lat: number;
  lon: number;
  imageUrl: string;
}

export type Trips = {
  [key: string]: Trip; // e.g., { Day1: { attractions: [...] }, Day2: { attractions: [...] } }
};

interface AttractionState {
  cities: City[] | null;
  countries: Country[] | null;
  loading: boolean;
  attractions: Attraction[];
  favorites: Attraction[];
  trips: Trips | null;
  time: Time | null;
  budget: number | null;

  getCities: (city: string) => Promise<void>;
  getCountries: () => Promise<void>;
  getCityByCountry: (country: string) => Promise<void>;
  getAttractions: (city: string) => Promise<void>;
  setFavorites: (favorite: Attraction) => void;
  getTrip: () => Promise<void>;
  setTimeAndBudget: (time: Time, budget: number | null) => void;
}

export const useAttractionStore = create<AttractionState>()(
  persist(
    (set, get) => ({
      cities: null,
      attractions: [],
      favorites: [],
      trips: null,
      time: null,
      budget: null,
      loading: false,
      countries: null,

      getCities: async (city) => {
        try {
          const res = await axiosInstance.get("/attraction/cities", {
            params: { city },
          });
          set({ cities: res.data });
        } catch (error) {
          console.error("Error in getCities:", error);
        }
      },

      getCountries: async () => {
        try {
          set({ countries: null });
          const res = await axiosInstance.get("attraction/countries");
          set({ countries: res.data });
        } catch (error) {
          console.error("Error in getCountries:", error);
          set({ countries: [] });
        }
      },

      getCityByCountry: async (countryCode) => {
        try {
          set({ cities: null });
          const res = await axiosInstance.get(
            `/attraction/topcities/${countryCode}`
          );
          set({ cities: res.data });
        } catch (error) {
          console.error("Error in getCityByCountry:", error);
          set({ cities: [] });
        }
      },

      getAttractions: async (city) => {
        set({ favorites: [] });
        try {
          const res = await axiosInstance.get("/attraction/attractions", {
            params: { destination: city },
          });
          set({ attractions: res.data });
        } catch (error) {
          console.error("Error in getAttractions:", error);
        }
      },

      setFavorites: (favorite) => {
        const currentFavorites = get().favorites;
        const isAlreadyFavorite = currentFavorites.some(
          (fav) => fav.name === favorite.name
        );

        if (isAlreadyFavorite) {
          set({
            favorites: currentFavorites.filter(
              (fav) => fav.name !== favorite.name
            ),
          });
        } else {
          set({ favorites: [...currentFavorites, favorite] });
        }
      },

      getTrip: async () => {
        set({ trips: null, loading: true });
        try {
          const time = {
            start: get().time?.startDate,
            end: get().time?.endDate,
          };

          const res = await axiosInstance.get("/attraction/trip", {
            params: {
              attractions: get()
                .favorites.map((a) => a.name)
                .join(","),
              time: JSON.stringify(time),
              budget: get().budget,
            },
          });
          const tripAttractions = res.data.groupedByDay.reduce(
            (acc: any, day: any, index: number) => {
              const dayKey = `Day${index + 1}`;
              acc[dayKey] = {
                attractions: day.attractions.map((attr: any) => ({
                  name: attr.name,
                  address: attr.address,
                  lat: attr.lat,
                  lon: attr.lon,
                })),
              };
              return acc;
            },
            {}
          );

          set({ trips: tripAttractions, loading: false });
        } catch (error) {
          console.error("Error in getTrip:", error);
        }
      },

      setTimeAndBudget: (time, budget) => {
        if (time && budget !== null) {
          set({ time, budget });
        } else {
          console.error(
            "Error in setTimeAndBudget: time and budget are required"
          );
        }
      },
    }),
    {
      name: "attraction-storage", // Will store to localStorage key
    }
  )
);
