import express from "express";
import {
  attractions,
  getTopCities,
  getCities,
  getTrip,
  getCountries,
  saveTrip,
  getUserTrips,
  removeUserTrip,
} from "../controllers/attraction.controller";
import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

// Attraction routes
router.get("/cities", getCities);
router.get("/topcities/:countryCode", getTopCities);
router.get("/countries", getCountries);
router.get("/attractions", attractions);
router.get("/trip", getTrip);
router.post("/user/trip", protectRoute, saveTrip);
router.get("/user/trips", protectRoute, getUserTrips);
router.delete("/user/trips/:tripId", protectRoute, removeUserTrip);

export default router;
