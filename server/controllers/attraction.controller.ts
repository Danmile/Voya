import User from "../models/user.model";
import Attraction from "../models/attraction.model";
import { Request, Response } from "express";
import axios from "axios";
import City from "../models/city.model";

interface City {
  name: string;
  lat: number;
  lon: number;
}

const fetchImages = async (popularCities: City[]): Promise<City[]> => {
  const citiesWithImages = await Promise.all(
    popularCities.map(async (city) => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(
            city.name
          )}&per_page=1`,
          {
            headers: {
              Authorization: process.env.PEXELS_API_KEY as string,
            },
          }
        );

        const image = response.data.photos?.[0];
        return {
          ...city,
          imageUrl: image ? image.src.landscape : undefined,
        };
      } catch (error) {
        console.error(`Failed to fetch image for ${city.name}`, error);
        return {
          ...city,
          imageUrl: undefined,
        };
      }
    })
  );

  return citiesWithImages;
};

const fetchWikimediaImage = async (
  commonsCategory: string
): Promise<string | null> => {
  const category = commonsCategory.replace("Category:", "");

  try {
    const res = await axios.get("https://commons.wikimedia.org/w/api.php", {
      params: {
        action: "query",
        format: "json",
        generator: "categorymembers",
        gcmtitle: `Category:${category}`,
        gcmtype: "file",
        gcmlimit: 1,
        prop: "imageinfo",
        iiprop: "url",
        origin: "*", // Required for CORS in browser
      },
    });

    const pages = res.data?.query?.pages;
    if (!pages) return null;

    const firstPage = Object.values(pages)[0] as any;
    return firstPage?.imageinfo?.[0]?.url || null;
  } catch (err) {
    console.error("Error fetching Wikimedia image for:", commonsCategory);
    return null;
  }
};

export const attractions = async (
  req: Request<{}, {}, {}, { destination?: string }>,
  res: Response
): Promise<void> => {
  const { destination } = req.query;
  const apiKey = process.env.GEOAPIFY_API_KEY;

  if (!destination) {
    res.status(400).json({ error: "Destination query parameter is required" });
    return;
  }

  try {
    const city = await City.findOne({ name: destination });
    if (!city) {
      res.status(404).json({ message: "City not found" });
      return;
    }

    const attractions = await Attraction.find({ city: city._id });

    res.json(attractions);
  } catch (error: any) {
    console.error("Error fetching attractions:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const favoriteAttraction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { favAttraction } = req.body;
    const userId = req.user._id;
    const attraction = await Attraction.findById(favAttraction._id);
    if (!attraction) {
      res
        .status(404)
        .json({ error: `Attraction with ID ${favAttraction._id} not found` });
      return;
    }
    // Update user's favorite attractions
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $addToSet: { favoriteAttractions: attraction._id } },
      { new: true, runValidators: true }
    ).populate("favoriteAttractions", "name cityName"); // Populate attraction details

    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(201).json({
      message: "Attraction added to favorite attractions successfully",
      attraction: {
        _id: attraction._id,
        name: attraction.name,
      },
      favoriteAttractions: updatedUser.favoriteAttractions,
    });
  } catch (error: any) {
    console.error("Error fetching favorite attractions:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getCities = async (req: Request, res: Response) => {
  const { city } = req.query;
  if (!city || typeof city !== "string") {
    return;
  }
  const upperCity = city
    ?.toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  try {
    const cities = await City.find({
      name: { $regex: `^${upperCity}`, $options: "i" }, // find cities that starts with
    });
    if (!cities) {
      res.status(404).json({ message: "Invalid city" });
    }
    res.status(200).json(cities);
  } catch (error) {}
};

export const getTopCities = async (req: Request, res: Response) => {
  const { country } = req.query;
  try {
    const response = await axios.get("https://google.serper.dev/places", {
      params: {
        q: `top+cities+to+visit+in+${country}`,
      },
      headers: {
        "X-API-KEY": process.env.SERPER_API_KEY,
        "Content-Type": "application/json",
      },
    });
    const topCities = response.data.places;

    if (!topCities && topCities.length === 0) {
      res.status(404).json({ message: `There is no cities in this region` });
    }
    const extractedCityData = topCities.map((place: any) => ({
      name: place.title,
      latitude: place.latitude,
      longitude: place.longitude,
    }));

    const citiesWithImages = await fetchImages(extractedCityData);
    res.json(citiesWithImages);
  } catch (error: any) {
    console.error("Error fetching cities:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
