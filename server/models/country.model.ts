import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  name: { type: String },
  code: { type: String },
  lat: { type: Number },
  lon: { type: Number },
  imageUrl: { type: String },
});

const Country = mongoose.model("Country", countrySchema);

export default Country;
