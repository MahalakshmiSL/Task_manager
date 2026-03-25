import { createContext, useState, useEffect } from "react";
import API from "../services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // fetch tasks
  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // create
  const addTask = async (task) => {
    await API.post("/tasks", task);
    fetchTasks();
  };
const updateTask = async (id, data) => {
  await API.put(`/tasks/${id}`, data);
  fetchTasks();
};
  // delete
  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  // complete
  const completeTask = async (id) => {
    await API.patch(`/tasks/${id}/status`);
    fetchTasks();
  };

 return (
  <TaskContext.Provider
    value={{
      tasks,
      addTask,
      deleteTask,
      completeTask,
      updateTask, // ✅ ADD HERE
    }}
  >
    {children}
  </TaskContext.Provider>
);
};