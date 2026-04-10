export default function StatusTable() {
  return (
    <section className="section">
      <h2>Complaint Status</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Assigned</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#101</td>
            <td>Water Leak</td>
            <td>In Progress</td>
            <td>Ravi</td>
            <td>9876543210</td>
          </tr>

          <tr>
            <td>#102</td>
            <td>Lift Issue</td>
            <td>Completed</td>
            <td>Suresh</td>
            <td>9876500000</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}