import mongoose from "mongoose";
import Attraction from "../models/attraction.model";
import City from "../models/city.model";
import { popularAttractions } from "../data/popularAttractions";
import { attractionWithPrices } from "../data/attractionWithPrices";
import dotenv from "dotenv";

dotenv.config();

async function fetchWikiImage(wikiTitle: string): Promise<string | null> {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    wikiTitle
  )}&prop=pageimages&format=json&pithumbsize=500`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const pages = data.query.pages;
    const page = Object.values(pages)[0] as any;

    if (page && page.thumbnail && page.thumbnail.source) {
      return page.thumbnail.source; // URL string of the thumbnail image
    } else {
      return null; // no image found
    }
  } catch (error) {
    console.error("Wiki image fetch error:", error);
    return null;
  }
}

const seedAttractions = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) throw new Error("Missing MONGO_URI");

    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
    await Attraction.deleteMany();

    for (const attr of attractionWithPrices) {
      const city = await City.findOne({ name: attr.cityName });
      if (city) {
        attr.city = city._id;
      }
    }
    for (const attr of attractionWithPrices) {
      const imageUrl = await fetchWikiImage(attr.wikiTitle);
      attr.image =
        imageUrl ||
        "https://images.unsplash.com/photo-1626675187623-7d32b499c6a0?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }

    await Attraction.insertMany(attractionWithPrices);
    console.log("Attractions added!");

    process.exit();
  } catch (error) {
    console.error("Error seeding attractions:", error);
    process.exit(1);
  }
};

seedAttractions();
