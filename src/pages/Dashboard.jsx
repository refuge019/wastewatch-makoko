import { useEffect, useState } from "react";

export default function Dashboard() {
  const [reports, setReports] = useState([]);

  const role = localStorage.getItem("role") || "resident";

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(data);
  }, []);

  const updateStatus = (id, status) => {
    const updated = reports.map((r) =>
      r.id === id ? { ...r, status } : r
    );

    setReports(updated);
    localStorage.setItem("reports", JSON.stringify(updated));
  };

  const deleteReport = (id) => {
    const updated = reports.filter((r) => r.id !== id);
    setReports(updated);
    localStorage.setItem("reports", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <h4>Current Role: {role}</h4>

      {reports.map((r) => (
        <div className="card" key={r.id}>
          <h3>{r.location}</h3>

          <p>Type: {r.type}</p>
          <p>Severity: {r.severity}</p>
          <p>Priority: {r.priority}</p>

          <p><b>Status:</b> {r.status}</p>
          <p>{r.date}</p>

          {/* ADMIN CONTROLS */}
          {role !== "resident" && (
            <div>
              <button onClick={() => updateStatus(r.id, "In Progress")}>
                Approve / Start Work
              </button>

              <button onClick={() => updateStatus(r.id, "Resolved")}>
                Mark Resolved
              </button>

              <button onClick={() => updateStatus(r.id, "Rejected")}>
                Reject
              </button>
            </div>
          )}

          {/* ADMIN ONLY DELETE */}
          {role === "admin" && (
            <button onClick={() => deleteReport(r.id)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}