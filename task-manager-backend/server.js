import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";
import taskRoutes from "./routes/taskRoutes.js";
import logRoutes from "./routes/logRoutes.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();

// ✅ FIRST create app
const app = express();

// middleware
app.use("/api/logs", logRoutes);
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/tasks", taskRoutes);
// DB connection
app.use("/api/users", userRoutes);
connectDB();

// routes
app.use("/api/auth", authRoutes);

// ✅ Protected route (AFTER app is created)
app.get("/api/test", authMiddleware, (req, res) => {
  res.json({
    msg: "Protected route working",
    user: req.user,
  });
});

// test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});