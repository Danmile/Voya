import mongoose, { Schema, Document, Types } from "mongoose";

export interface IAttraction extends Document {
  image: string;
  name: string;
  lon: number;
  lat: number;
  address: string;
  description: string;
  wikiTitle: string;
  cityName: string;
  city: Types.ObjectId;
}

const attractionSchema = new Schema<IAttraction>({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lon: {
    type: Number,
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
  description: {
    type: String,
    required: true,
  },
  wikiTitle: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
});

const Attraction = mongoose.model<IAttraction>("Attraction", attractionSchema);

export default Attraction;
