export default function Dashboard() {
  return (
    <section className="section">
      <h2>Resident Dashboard</h2>

      <div className="grid">
        <div className="card">
          <h3>Total Complaints</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>In Progress</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Resolved</h3>
          <p>7</p>
        </div>

        <div className="card">
          <h3>Announcements</h3>
          <p>Water shutdown tomorrow</p>
        </div>
      </div>
    </section>
  );
}