import mongoose from "mongoose";
import Country from "../models/country.model";
import { popularCountries } from "../data/popularCountries";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    console.log(mongoURI);
    if (!mongoURI) return;
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
    await Country.insertMany(popularCountries);

    console.log("Countries added!");
    process.exit();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();
