import mongoose from "mongoose";

const attractionSchema = new mongoose.Schema({
  placeId: {
    type: String,
    unique: true,
  },
  image: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  lon: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  address: {
    type: Number,
    required: true,
  },
  opening_hours: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
  categories: {
    type: String,
    required: true,
  },
});

const Attraction = mongoose.model("Attraction", attractionSchema);

export default Attraction;
