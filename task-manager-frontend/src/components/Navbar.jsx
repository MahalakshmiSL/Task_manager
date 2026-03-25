import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow">
      
      <h1 className="text-xl font-bold dark:text-white">
        Task Manager 🚀
      </h1>

      <div className="flex gap-3">
        
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDark}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;