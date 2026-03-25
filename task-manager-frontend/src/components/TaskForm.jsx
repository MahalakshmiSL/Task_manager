import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import API from "../services/api";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [users, setUsers] = useState([]);

  // 🔥 fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await API.get("/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTask({
      title,
      description,
      assignedTo,
    });

    setTitle("");
    setDescription("");
    setAssignedTo("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      
      <h2 className="font-bold mb-3">Create Task</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full mb-2 p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        className="w-full mb-2 p-2 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* 🔥 USER DROPDOWN */}
      <select
        className="w-full mb-2 p-2 border rounded"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user.email}>
            {user.email}
          </option>
        ))}
      </select>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>

    </form>
  );
};

export default TaskForm;