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
    const user = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    // It's indicating the model I want to access
    // I defined it as 'Donor' in schema.prisma.
    await prisma.donor.create({
      data: {
        email: user.email,
        username: user.username,
        password: hashPassword,
      },
    });
    res.status(201).json({ message: "Registered!" });
    //res.status(201).json(userDB);
  } catch (err) {
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
