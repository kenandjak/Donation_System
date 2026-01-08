import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Register

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const usernameRegex = /^[a-zA-Z]/;

    if (username.length < 5) {
      return res.status(400).json({
        message: "Username must be at least 5 characters long.",
      });
    }

    if (!usernameRegex.test(username)) {
      return res.status(400).json({
        message: "Username must start with a letter.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // It's indicating the model I want to access
    // I defined it as 'Donor' in schema.prisma.
    await prisma.donor.create({
      data: {
        email: email,
        username: username,
        password: hashPassword,
      },
    });

    res.status(201).json({ message: "Registered!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
});

// Login

router.post("/login", async (req, res) => {
  try {
    const userInfo = req.body;
    // I defined the model as 'Donor' in schema.prisma.
    const user = await prisma.donor.findUnique({
      where: { email: userInfo.email },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(userInfo.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Unknown password" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json(token);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});
export default router;
