"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tripSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
                    type: mongoose_1.default.Schema.Types.ObjectId,
                    ref: "Attraction",
                },
            ],
        },
    ],
}, { timestamps: true });
const Trip = mongoose_1.default.model("Trip", tripSchema);
exports.default = Trip;
