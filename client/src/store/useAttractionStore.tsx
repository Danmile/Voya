import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export interface City {
  name: string;
  imageUrl: string;
}

export interface Attraction {
  _id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  lat: number;
  lon: number;
  price: number;
  cityName: string;
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

export interface UserTrips {
  _id: string;
  totalCost: number;
  numDays: number;
  groupedByDay: Day[];
}

interface Day {
  name: string;
  attractions: Attraction[];
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
  fullTripData: Trip | null;
  time: Time | null;
  budget: number | null;
  cityDescription: string | null;
  userTrips: UserTrips[] | null;

  getCities: (city: string) => Promise<void>;
  getCountries: () => Promise<void>;
  getCityByCountry: (country: string) => Promise<void>;
  getCityDescription: (cityName: string) => Promise<void>;
  getAttractions: (city: string) => Promise<void>;
  setFavorites: (favorite: Attraction) => void;
  getTrip: (trip?: UserTrips) => Promise<void>;
  saveFavTrip: (favTrip: Trip) => Promise<void>;
  getUserTrips: () => Promise<void>;
  removeUserTrip: (userId: string) => Promise<void>;
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
      cityDescription: null,
      userTrips: null,
      fullTripData: null,

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
      getCityDescription: async (cityName) => {
        try {
          set({ cityDescription: null }); // reset before loading
          const res = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
              cityName
            )}`
          );
          const data = await res.json();
          set({ cityDescription: data.extract || "No description found." });
        } catch (error) {
          console.error("Error fetching city description:", error);
          set({ cityDescription: "Failed to load city description." });
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

      getTrip: async (trip) => {
        set({ trips: null, loading: true });
        if (trip) {
          try {
            const tripAttractions: Trips = trip.groupedByDay.reduce(
              (acc: Trips, day: Day, index: number) => {
                const dayKey = `Day${index + 1}`;
                acc[dayKey] = {
                  attractions: day.attractions,
                  time: { startDate: null, endDate: null }, // Or derive if you store them
                  budget: 0, // Or use trip.totalCost / trip.numDays if needed
                };
                return acc;
              },
              {}
            );

            set({
              trips: tripAttractions,
              fullTripData: null, // or trip if you want to store it
              loading: false,
            });

            return;
          } catch (error) {
            console.error("Error processing existing trip:", error);
          }
        }
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
          set({
            trips: tripAttractions,
            fullTripData: res.data,
            loading: false,
          });
        } catch (error) {
          console.error("Error in getTrip:", error);
        }
      },
      saveFavTrip: async (favTrip) => {
        try {
          await axiosInstance.post("/attraction/user/trip", favTrip);
          toast.success("Trip saved successfully");
        } catch (error) {
          console.error("Error in saveFavTrip:", error);
        }
      },
      getUserTrips: async () => {
        set({ loading: true });
        try {
          const res = await axiosInstance.get("/attraction/user/trips");
          set({ userTrips: res.data, loading: false });
        } catch (error) {
          console.error("Error in getUserTrips:", error);
        }
      },

      removeUserTrip: async (tripId) => {
        try {
          await axiosInstance.delete(`attraction/user/trips/${tripId}`);
          set((state) => ({
            userTrips: state.userTrips?.filter((trip) => trip._id !== tripId),
          }));
        } catch (error) {
          console.error("Error in removeUserTrip:", error);
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
