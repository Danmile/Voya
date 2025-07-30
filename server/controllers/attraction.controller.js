"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserTrip = exports.getUserTrips = exports.saveTrip = exports.getTrip = exports.getTopCities = exports.getCountries = exports.getCities = exports.attractions = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const attraction_model_1 = __importDefault(require("../models/attraction.model"));
const city_model_1 = __importDefault(require("../models/city.model"));
const country_model_1 = __importDefault(require("../models/country.model"));
const trip_model_1 = __importDefault(require("../models/trip.model"));
const getDistanceKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};
const attractions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { destination } = req.query;
    const apiKey = process.env.GEOAPIFY_API_KEY;
    if (!destination) {
        res.status(400).json({ error: "Destination query parameter is required" });
        return;
    }
    try {
        const city = yield city_model_1.default.findOne({ name: destination });
        if (!city) {
            res.status(404).json({ message: "City not found" });
            return;
        }
        const attractions = yield attraction_model_1.default.find({ city: city._id });
        res.json(attractions);
    }
    catch (error) {
        console.error("Error fetching attractions:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
});
exports.attractions = attractions;
const getCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city } = req.query;
    if (!city || typeof city !== "string") {
        return;
    }
    const upperCity = city === null || city === void 0 ? void 0 : city.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    try {
        const cities = yield city_model_1.default.find({
            name: { $regex: `^${upperCity}`, $options: "i" }, // find cities that starts with
        });
        if (!cities) {
            res.status(404).json({ message: "Invalid city" });
        }
        res.status(200).json(cities);
    }
    catch (error) { }
});
exports.getCities = getCities;
const getCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countries = yield country_model_1.default.find();
        if (!countries) {
            res.status(404).json({ message: "No countries found" });
        }
        res.status(200).json(countries);
    }
    catch (error) { }
});
exports.getCountries = getCountries;
const getTopCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { countryCode } = req.params;
    if (!countryCode) {
        res.status(400).json({ message: "Missing country code" });
        return;
    }
    try {
        const cities = yield city_model_1.default.find({ countryCode: countryCode.toUpperCase() });
        if (!cities.length) {
            res
                .status(404)
                .json({ message: "No cities found for this country code" });
            return;
        }
        res.status(200).json(cities);
    }
    catch (error) {
        console.error("Error fetching cities:", error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.getTopCities = getTopCities;
const getTrip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { attractions, time, budget } = req.query;
    if (!time) {
        res.status(400).json({ message: "Time is required" });
        return;
    }
    let parsedTime;
    try {
        parsedTime = JSON.parse(time);
    }
    catch (err) {
        res.status(400).json({ message: "Invalid time format" });
        return;
    }
    const start = new Date(parsedTime.start);
    const end = new Date(parsedTime.end);
    const numDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    if (!attractions) {
        res.status(400).json({ message: "Attractions are not specified" });
        return;
    }
    const attractionNames = Array.isArray(attractions)
        ? attractions
        : String(attractions).split(",");
    try {
        // Fetch full attraction objects from DB
        const attractionDocs = yield Promise.all(attractionNames.map((name) => attraction_model_1.default.findOne({ name: name.toString().trim() })));
        // Filter out not found/nulls
        const validAttractions = attractionDocs.filter((attr) => !!attr &&
            typeof attr.price === "number" &&
            typeof attr.lat === "number" &&
            typeof attr.lon === "number");
        const totalCost = validAttractions.reduce((sum, attr) => sum + attr.price, 0);
        if (budget && totalCost > Number(budget)) {
            res.status(400).json({ message: "Budget is too low" });
            return;
        }
        // Group attractions by proximity and day
        const groupedByDay = Array.from({ length: numDays }, (_, index) => ({
            name: `Day ${index + 1}`,
            attractions: [],
        }));
        const attractionsLeft = [...validAttractions];
        for (let day = 0; day < numDays && attractionsLeft.length > 0; day++) {
            const anchor = attractionsLeft.shift();
            if (!anchor)
                continue;
            groupedByDay[day].attractions.push(anchor);
            // Find close attractions within 2.5km
            const nearby = attractionsLeft.filter((attr) => getDistanceKm(anchor.lat, anchor.lon, attr.lat, attr.lon) < 2.5);
            // Add up to 2 nearby attractions
            const toAdd = nearby.slice(0, 3);
            groupedByDay[day].attractions.push(...toAdd);
            // Remove them from remaining list
            for (const added of toAdd) {
                const index = attractionsLeft.findIndex((a) => a.name === added.name);
                if (index !== -1)
                    attractionsLeft.splice(index, 1);
            }
        }
        const filteredDays = groupedByDay.filter((day) => day.attractions.length > 0);
        res.status(200).json({
            totalCost,
            numDays: filteredDays.length,
            groupedByDay: filteredDays,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.getTrip = getTrip;
const saveTrip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user._id;
    const trip = req.body;
    if (!trip || typeof trip !== "object") {
        res.status(400).json({ error: "Trip is required" });
        return;
    }
    if (!userId) {
        res.status(401).json({ error: "Invalid or missing user authentication" });
        return;
    }
    try {
        const savedTrip = yield trip_model_1.default.create(Object.assign(Object.assign({}, trip), { user: userId }));
        const updatedUser = yield user_model_1.default.findByIdAndUpdate(userId, { $addToSet: { favoriteTrips: savedTrip._id } }, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json({
            message: "Trip added to favorites",
        });
    }
    catch (error) {
        console.error("Failed to add favorite trip:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.saveTrip = saveTrip;
const getUserTrips = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user._id;
        const user = yield user_model_1.default.findById(userId).populate({
            path: "favoriteTrips",
            populate: {
                path: "groupedByDay.attractions",
                model: "Attraction",
            },
        });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json(user.favoriteTrips);
    }
    catch (error) {
        console.error("Error in getUserTrips: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getUserTrips = getUserTrips;
const removeUserTrip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user._id;
        const { tripId } = req.params;
        const deletedTrip = yield trip_model_1.default.findOneAndDelete({
            _id: tripId,
            user: userId,
        });
        if (!deletedTrip) {
            res.status(404).json({ message: "No trip found" });
            return;
        }
        yield user_model_1.default.findByIdAndUpdate(userId, {
            $pull: { favoriteTrips: tripId },
        });
        res.status(200).json({ message: "Trip deleted successfully" });
    }
    catch (error) {
        console.error("Error in removeUserTrip: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.removeUserTrip = removeUserTrip;
