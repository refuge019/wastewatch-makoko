import { Link } from "react-router-dom";

export default function Navbar() {
  const role = localStorage.getItem("role") || "resident";

  const setRole = (newRole) => {
    localStorage.setItem("role", newRole);
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2>WasteWatch Makoko</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/report">Report</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/analytics">Analytics</Link>

        {/* ROLE SWITCH (IMPORTANT FOR DEMO) */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="resident">Resident</option>
          <option value="leader">Community Leader</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </nav>
  );
}