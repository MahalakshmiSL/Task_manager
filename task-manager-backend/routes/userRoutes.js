import express from "express";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// get all users (manager only)
router.get("/", authMiddleware, async (req, res) => {
  const users = await User.find().select("email");
  res.json(users);
});

export default router;