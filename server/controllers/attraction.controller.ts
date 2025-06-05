import User from "../models/user.model";
import Attraction from "../models/attraction.model";
import { Request, Response } from "express";
import { popularCountries } from "../constants/popularCountries";
import axios from "axios";

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
    const geocodeResponse = await axios.get(
      "https://api.geoapify.com/v1/geocode/search",
      {
        params: { text: destination, apiKey },
      }
    );

    if (!geocodeResponse.data.features.length) {
      res.status(404).json({ error: "City not found" });
      return;
    }

    const { lat, lon } = geocodeResponse.data.features[0].properties;

    const attractionsResponse = await axios.get(
      "https://api.geoapify.com/v2/places",
      {
        params: {
          categories: "tourism",
          filter: `circle:${lon},${lat},5000`,
          limit: 20,
          apiKey,
        },
      }
    );

    if (!attractionsResponse.data.features) {
      res.json([]);
    }
    const formattedAttractions = attractionsResponse.data.features.map(
      (att: any) => {
        return {
          placeId: att.properties.place_id,
          name: att.properties.name_international?.en || att.properties.name,
          image:
            att.properties.wiki_and_media?.image ||
            att.properties.datasource?.raw?.image,
          website: att.properties.website,
          state: att.properties.state,
          lon: att.properties.lon,
          lat: att.properties.lat,
          address: att.properties.formatted,
          opening_hours: att.properties.opening_hours,
          categories: att.properties.categories,
        };
      }
    );

    res.json(formattedAttractions);
  } catch (error: any) {
    console.error("Error fetching attractions:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const favoriteAttraction = async (req: Request, res: Response) => {
  try {
    const { favAttraction } = req.body;
    const userId = req.user._id;
    let attraction = await Attraction.findOne({
      placeId: favAttraction.placeId,
    });
    if (!attraction) {
      attraction = await Attraction.create(favAttraction);
    }
    await User.findByIdAndUpdate(userId, {
      $addToSet: { favoriteAttractions: attraction._id },
    });
    res.status(200).json(attraction);
  } catch (error: any) {
    console.error("Error fetching favorite attractions:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const countries = (req: Request, res: Response) => {
  res.json(popularCountries);
};

export const getCities = async (req: Request, res: Response) => {
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
