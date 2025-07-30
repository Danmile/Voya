"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const attraction_controller_1 = require("../controllers/attraction.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
// Attraction routes
router.get("/cities", attraction_controller_1.getCities);
router.get("/topcities/:countryCode", attraction_controller_1.getTopCities);
router.get("/countries", attraction_controller_1.getCountries);
router.get("/attractions", attraction_controller_1.attractions);
router.get("/trip", attraction_controller_1.getTrip);
router.post("/user/trip", auth_middleware_1.protectRoute, attraction_controller_1.saveTrip);
router.get("/user/trips", auth_middleware_1.protectRoute, attraction_controller_1.getUserTrips);
router.delete("/user/trips/:tripId", auth_middleware_1.protectRoute, attraction_controller_1.removeUserTrip);
exports.default = router;
