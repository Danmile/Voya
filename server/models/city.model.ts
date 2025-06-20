import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: { type: String },
  countryCode: { type: String },
  imageUrl: { type: String },
});

const City = mongoose.model("City", citySchema);

export default City;
