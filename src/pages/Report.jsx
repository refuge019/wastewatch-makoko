import { useState } from "react";
import { calculatePriority } from "../utils/priority";

export default function Report() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [severity, setSeverity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const priority = calculatePriority(type, severity);

    const report = {
      id: Date.now(),
      location,
      type,
      severity,
      priority,
      description,
      status: "Submitted",
      date: new Date().toLocaleString(),
    };

    const existing = JSON.parse(localStorage.getItem("reports")) || [];
    localStorage.setItem("reports", JSON.stringify([...existing, report]));

    alert("Report Submitted");

    setLocation("");
    setType("");
    setSeverity("");
    setDescription("");
  };

  return (
    <div className="container">
      <h2>Report Waste</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Waste Type</option>
          <option>Plastic</option>
          <option>Organic</option>
          <option>Metal</option>
          <option>Mixed Waste</option>
        </select>

        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option value="">Severity</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}