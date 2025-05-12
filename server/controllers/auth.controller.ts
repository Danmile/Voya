import express from "express";
import User from "../models/user.model";
import bcryptjs, { compare } from "bcryptjs";
import { Request, Response } from "express";

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
    res.status(200).send(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log("Error in login route: ", error);
  }
};
