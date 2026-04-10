export default function ComplaintForm() {
  return (
    <section className="section">
      <h2>Raise Complaint</h2>

      <form className="form">
        <input placeholder="Flat Number" />

        <select>
          <option>Issue Type</option>
          <option>Plumbing</option>
          <option>Electricity</option>
        </select>

        <textarea placeholder="Describe issue" />

        <input type="file" />

        <button>Submit</button>
      </form>
    </section>
  );
}