import jwt from "jsonwebtoken";
import { Response } from "express";

export const generateToken = (userId: object, res: Response) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT Secret is not defined");
  }
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 12 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
    secure: process.env.NODE_ENV !== "development", // true in prod, false in dev
  });
  return token;
};
