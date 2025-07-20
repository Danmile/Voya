import express from "express";
import {
  attractions,
  getTopCities,
  favoriteAttraction,
  getCities,
  getTrip,
} from "../controllers/attraction.controller";
import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

// Attraction routes
router.get("/cities", getCities);
router.get("/topcities/:countryCode", getTopCities);
router.get("/attractions", attractions);
router.get("/trip", getTrip);
router.post("/user/attractions", protectRoute, favoriteAttraction);

export default router;
