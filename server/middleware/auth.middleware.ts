import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user.model";
import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const protectRoute = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).json({ message: "Unaithorized - no token provided" });
      return;
    }
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT Secret is not defined");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    if (!decoded || !decoded.userId) {
      res.status(401).json({ message: "Unaithorized - no token provided" });
      return;
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      res.status(500).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error: any) {
    console.log("Error in protectRoute", error.message);
    res.status(500).send("Server Error");
  }
};
