import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import logRoutes from "./routes/logRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();

// ✅ 1. CORS FIRST (VERY IMPORTANT)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ 2. JSON middleware
app.use(express.json());

// ✅ 3. Connect DB
connectDB();

// ✅ 4. Routes (AFTER CORS)
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/users", userRoutes);

// ✅ Protected test route
app.get("/api/test", authMiddleware, (req, res) => {
  res.json({
    msg: "Protected route working",
    user: req.user,
  });
});

// root route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});