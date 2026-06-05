import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>WasteWatch Makoko</h1>

      <p>
        Community-powered waste reporting for cleaner waterways and safer living.
      </p>

      <div>
        <Link to="/report">
          <button>Report Waste</button>
        </Link>

        <Link to="/dashboard">
          <button>View Reports</button>
        </Link>
      </div>

      <div className="card">
        <h3>How it works</h3>
        <p>1. Residents report waste locations</p>
        <p>2. System calculates priority</p>
        <p>3. Community responds</p>
        <p>4. Data improves cleanup planning</p>
      </div>

      <div className="card">
        <h3>Ubuntu Principle</h3>
        <p>We exist through each other. Clean environment is collective responsibility.</p>
      </div>
    </div>
  );
}