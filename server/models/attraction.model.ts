import mongoose from "mongoose";

const attractionSchema = new mongoose.Schema({
  placeId: {
    type: String,
    unique: true,
  },
  image: { type: String, required: true },
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
    type: String,
    required: true,
  },
  opening_hours: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
  categories: {
    type: Object,
    required: true,
  },
});

const Attraction = mongoose.model("Attraction", attractionSchema);

export default Attraction;
