import "../styles/LeadForm.css";

function LeadForm() {
  return (
    <section className="lead-section" id="demo">

      <div className="lead-card">

        <h2>Request a Demo</h2>

        <form>

          <input type="text" placeholder="Full Name"/>

          <input type="email" placeholder="Email Address"/>

          <select>
            <option>Select Budget</option>
            <option>Below ₹25,000</option>
            <option>₹25k - ₹50k</option>
            <option>₹50k - ₹1L</option>
            <option>Above ₹1L</option>
          </select>

          <textarea
            rows="5"
            placeholder="Tell us about your project"
          ></textarea>

          <button>
            Submit Request
          </button>

        </form>

      </div>

    </section>
  );
}

export default LeadForm;