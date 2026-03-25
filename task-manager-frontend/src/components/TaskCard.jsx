import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask, completeTask } = useContext(TaskContext);

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
      
      <h3 className="text-lg font-bold dark:text-white">
        {task.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {task.description}
      </p>

      <div className="mt-3 flex justify-between items-center">
        
        <span className="text-xs bg-blue-200 px-2 py-1 rounded">
          {task.status}
        </span>

        <div className="flex gap-2">
          
          <button
            onClick={() => completeTask(task._id)}
            className="bg-green-500 text-white px-2 py-1 rounded text-sm"
          >
            Done
          </button>
          <button
  onClick={() => {
    const newTitle = prompt("Edit Title", task.title);
    if (newTitle) {
      updateTask(task._id, { title: newTitle });
    }
  }}
  className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
>
  Edit
</button>

          <button
            onClick={() => deleteTask(task._id)}
            className="bg-red-500 text-white px-2 py-1 rounded text-sm"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default TaskCard;