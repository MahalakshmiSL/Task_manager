import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  action: String,
  user: String,
  taskId: String,
  time: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Log", logSchema);