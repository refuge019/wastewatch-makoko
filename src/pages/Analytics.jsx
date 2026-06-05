export default function Analytics() {
  const reports = JSON.parse(localStorage.getItem("reports")) || [];

  const total = reports.length;

  const critical = reports.filter(r => r.priority === "CRITICAL").length;
  const high = reports.filter(r => r.priority === "HIGH").length;
  const low = reports.filter(r => r.priority === "LOW").length;

  const resolved = reports.filter(r => r.status === "Resolved").length;
  const pending = total - resolved;

  return (
    <div className="container">
      <h2>Analytics Dashboard</h2>

      <div className="card">
        <h3>Total Reports: {total}</h3>
      </div>

      <div className="card">
        <h3>Critical: {critical}</h3>
      </div>

      <div className="card">
        <h3>High Priority: {high}</h3>
      </div>

      <div className="card">
        <h3>Low Priority: {low}</h3>
      </div>

      <div className="card">
        <h3>Resolved: {resolved}</h3>
      </div>

      <div className="card">
        <h3>Pending: {pending}</h3>
      </div>
    </div>
  );
}