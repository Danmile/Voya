import mongoose from "mongoose";
import City from "../models/city.model";
import { popularCities } from "../data/popularCities";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    console.log(mongoURI);
    if (!mongoURI) return;
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
    await City.deleteMany();
    await City.insertMany(popularCities);

    console.log("Cities added!");
    process.exit();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();
