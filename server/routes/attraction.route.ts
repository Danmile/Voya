import express from "express";
import {
  countries,
  attractions,
  getCities,
  favoriteAttraction,
} from "../controllers/attraction.controller";
import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

// Attraction routes
router.get("/countries", countries);
router.get("/cities", getCities);
router.get("/attractions", attractions);
router.post("/user/attractions", protectRoute, favoriteAttraction);

export default router;
