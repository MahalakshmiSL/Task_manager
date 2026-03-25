import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  updateStatus
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

// Manager only
router.post("/", authMiddleware, roleMiddleware("manager"), createTask);

// Both
router.get("/", authMiddleware, getTasks);

// Manager only
router.put("/:id", authMiddleware, roleMiddleware("manager"), updateTask);
router.delete("/:id", authMiddleware, roleMiddleware("manager"), deleteTask);
router.patch(
  "/:id/status",
  authMiddleware,
  updateStatus
);
export default router;