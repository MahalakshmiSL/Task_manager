import express from "express";
import Log from "../models/Log.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const logs = await Log.find().sort({ time: -1 });
  res.json(logs);
});

export default router;