import express from "express";
import authRoutes from "./routes/auth.route";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
  connectDB();
});
