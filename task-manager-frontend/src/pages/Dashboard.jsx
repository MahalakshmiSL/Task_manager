import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import ActivityLog from "../components/ActivityLog";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  // 🔐 Protect Route
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">

      {/* Navbar */}
      <Navbar />

      <div className="p-6 max-w-5xl mx-auto">

        {/* Manager Only - Create Task */}
        {role === "manager" && (
          <div className="mb-6">
            <TaskForm />
          </div>
        )}

        {/* Tasks */}
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          Your Tasks
        </h2>

        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks available</p>
        ) : (
          <div className="grid gap-4">
            {tasks.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        )}

        {/* Activity Logs */}
        <ActivityLog />

      </div>
    </div>
  );
};

export default Dashboard;