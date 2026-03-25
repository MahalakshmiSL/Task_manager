import { useEffect, useState } from "react";
import API from "../services/api";

const ActivityLog = () => {
  const [logs, setLogs] = useState([]); // ✅ default empty array

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await API.get("/logs");
        setLogs(res.data);
      } catch (err) {
        console.log("Error fetching logs");
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="bg-white p-4 mt-6 rounded shadow">
      
      <h3 className="font-bold mb-2">Activity Logs</h3>

      {logs.length === 0 ? (
        <p className="text-gray-500 text-sm">No activity yet</p>
      ) : (
        logs.map((log) => (
          <p key={log._id} className="text-sm text-gray-600">
            {log.action}
          </p>
        ))
      )}

    </div>
  );
};

export default ActivityLog;