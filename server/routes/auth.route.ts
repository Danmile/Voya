import express from "express";
import {
  register,
  login,
  logout,
  checkAuth,
  forgotPasswordRoute,
  resetPassword,
  countries,
  attractions,
  getCities,
} from "../controllers/auth.controller";
import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();
//Auth Routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check", protectRoute, checkAuth);
router.post("/forgot-password", forgotPasswordRoute);
router.post("/reset-password/:resetToken", resetPassword);
// Attraction routes
router.get("/countries", countries);
router.get("/cities", getCities);
router.get("/attractions", attractions);

export default router;
