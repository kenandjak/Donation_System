import express from "express";
import { PrismaClient } from "@prisma/client";
import auth from "../middlewares/auth.js";

const prisma = new PrismaClient();
const router = express.Router();

// Customized page

router.get("/login/dashboard", auth, async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "Invalid token payload." });
    }

    const user = await prisma.donor.findUnique({
      where: {
        id: userId,
      },
      select: {
        username: true,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ message: `Welcome, ${user.username}!`, user: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error." });
  }
});

export default router;
