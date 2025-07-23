import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
    numDays: {
      type: Number,
      required: true,
    },
    groupedByDay: [
      {
        name: {
          type: String,
          required: true,
        },
        attractions: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Attraction",
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Trip = mongoose.model("Trip", tripSchema);
export default Trip;
