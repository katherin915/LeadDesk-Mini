import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose LeadDesk Mini?</h2>

      <div className="cards">

        <div className="card">
          <h3>📋 Lead Capture</h3>
          <p>Collect customer enquiries instantly.</p>
        </div>

        <div className="card">
          <h3>📊 Lead Tracking</h3>
          <p>Track every lead with ease.</p>
        </div>

        <div className="card">
          <h3>🔒 Secure Access</h3>
          <p>Protected admin dashboard.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;