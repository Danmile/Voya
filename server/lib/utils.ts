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
    maxAge: 12 * 60 * 60,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
