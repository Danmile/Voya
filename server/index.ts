import express from "express";
import authRoutes from "./routes/auth.route";
import authAttraction from "./routes/attraction.route";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://voya-zeta.vercel.app", // your deployed frontend
];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow non-browser requests like Postman
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // if you use cookies or auth headers
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/attraction", authAttraction);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
  connectDB();
});
