import express from "express";
import User from "../models/user.model";
import bcryptjs, { compare } from "bcryptjs";
import { Request, Response } from "express";
import { generateToken } from "../lib/utils";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { popularCountries } from "../constants/popularCountries";
import axios from "axios";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    if (password.length < 6) {
      res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
      return;
    }

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const salt: string = await bcryptjs.genSalt(10);
    const hashedPass: string = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPass,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      const userObj = newUser.toObject();
      const { password: hidePass, ...userWithoutPassword } = userObj;
      res.status(201).send(userWithoutPassword);
    }
  } catch (error) {
    res.status(500).send("Server Error");
    console.log(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "You must fill all of the fields" });
      return;
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    const comparePass = await bcryptjs.compare(password, user.password);
    if (!comparePass) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    const userObj = user.toObject();
    const { password: hidePass, ...userWithoutPassword } = userObj;
    generateToken(user._id, res);
    res.status(200).send(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log("Error in login route: ", error);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const checkAuth = async (req: AuthenticatedRequest, res: Response) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    console.log("Error in checkAuth: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const forgotPasswordRoute = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ message: "Email is required" });
      return;
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid email" });
      return;
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "danmil511@gmail.com", pass: "jzsz imjc oeba gfin" },
    });
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour;
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

    const mailOptions = {
      from: "danmil511@gmail.com",
      to: user.email,
      subject: "Voya - reset your password",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password. The link expires in 1 hour.</p>`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Password reset email sent" });

    res.status(200).json({ user });
  } catch (error) {}
};

export const resetPassword = async (req: Request, res: Response) => {
  const { resetToken } = req.params;
  const { password } = req.body;
  const user = await User.findOne({ resetToken });
  if (!user) {
    res.status(400).json({ message: "Expired session" });
    return;
  }
  const salt = await bcryptjs.genSalt(10);
  user.password = await bcryptjs.hash(password, salt);
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;

  generateToken(user._id, res);
  await user.save();
  res.status(200).json(user);
};

export const attractions = async (
  req: Request<{}, {}, {}, { destination?: string }>,
  res: Response
): Promise<void> => {
  const { destination } = req.query;
  const apiKey = process.env.GEOAPIFY_API_KEY;

  if (!destination) {
    res.status(400).json({ error: "Destination query parameter is required" });
    return;
  }

  try {
    const geocodeResponse = await axios.get(
      "https://api.geoapify.com/v1/geocode/search",
      {
        params: { text: destination, apiKey },
      }
    );

    if (!geocodeResponse.data.features.length) {
      res.status(404).json({ error: "City not found" });
      return;
    }

    const { lat, lon } = geocodeResponse.data.features[0].properties;

    const attractionsResponse = await axios.get(
      "https://api.geoapify.com/v2/places",
      {
        params: {
          categories: "tourism.attraction",
          filter: `circle:${lon},${lat},5000`,
          limit: 20,
          apiKey,
        },
      }
    );

    res.json(attractionsResponse.data.features);
  } catch (error: any) {
    console.error("Error fetching attractions:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const countries = (req: Request, res: Response) => {
  res.json(popularCountries);
};
