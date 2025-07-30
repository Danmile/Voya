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
const mongoose_1 = __importDefault(require("mongoose"));
const attraction_model_1 = __importDefault(require("../models/attraction.model"));
const city_model_1 = __importDefault(require("../models/city.model"));
const attractionWithPrices_1 = require("../data/attractionWithPrices");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function fetchWikiImage(wikiTitle) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wikiTitle)}&prop=pageimages&format=json&pithumbsize=500`;
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            const pages = data.query.pages;
            const page = Object.values(pages)[0];
            if (page && page.thumbnail && page.thumbnail.source) {
                return page.thumbnail.source; // URL string of the thumbnail image
            }
            else {
                return null; // no image found
            }
        }
        catch (error) {
            console.error("Wiki image fetch error:", error);
            return null;
        }
    });
}
const seedAttractions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI)
            throw new Error("Missing MONGO_URI");
        yield mongoose_1.default.connect(mongoURI);
        console.log("MongoDB connected");
        yield attraction_model_1.default.deleteMany();
        for (const attr of attractionWithPrices_1.attractionWithPrices) {
            const city = yield city_model_1.default.findOne({ name: attr.cityName });
            if (city) {
                attr.city = city._id;
            }
        }
        for (const attr of attractionWithPrices_1.attractionWithPrices) {
            const imageUrl = yield fetchWikiImage(attr.wikiTitle);
            attr.image =
                imageUrl ||
                    "https://images.unsplash.com/photo-1626675187623-7d32b499c6a0?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        }
        yield attraction_model_1.default.insertMany(attractionWithPrices_1.attractionWithPrices);
        console.log("Attractions added!");
        process.exit();
    }
    catch (error) {
        console.error("Error seeding attractions:", error);
        process.exit(1);
    }
});
seedAttractions();
