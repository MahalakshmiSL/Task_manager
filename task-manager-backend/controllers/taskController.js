import Task from "../models/Task.js";
import Log from "../models/Log.js"; // ✅ IMPORT LOG

// ➕ Create Task (Manager only)
export const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;

    const task = await Task.create({
      title,
      description,
      assignedTo,
      createdBy: req.user.id,
    });

    // ✅ ADD LOG HERE
    await Log.create({
      action: "Task Created",
      user: req.user.id,
      taskId: task._id,
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📋 Get Tasks
export const getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "manager") {
      tasks = await Task.find({ createdBy: req.user.id });
    } else {
      tasks = await Task.find({ assignedTo: req.user.email });
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✏️ Update Task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // ✅ ADD LOG HERE
    await Log.create({
      action: "Task Updated",
      user: req.user.id,
      taskId: req.params.id,
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ Delete Task
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    // ✅ ADD LOG HERE
    await Log.create({
      action: "Task Deleted",
      user: req.user.id,
      taskId: req.params.id,
    });

    res.json({ msg: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update Status (User)
export const updateStatus = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: "Completed" },
      { new: true }
    );

    // ✅ ADD LOG HERE
    await Log.create({
      action: "Task Completed",
      user: req.user.id,
      taskId: req.params.id,
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};