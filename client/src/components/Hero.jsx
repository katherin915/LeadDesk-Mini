import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Convert Visitors Into
          <span> Customers</span>
        </h1>

        <p>
          Capture, organize and manage customer leads from one secure dashboard
          built for growing businesses.
        </p>

        <div className="hero-buttons">
          <a href="#demo">
            <button className="primary-btn">Request Demo</button>
          </a>

          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="dashboard-card">
          <h3>Dashboard Preview</h3>

          <div className="stats">
            <div className="stat-box">
              <h4>128</h4>
              <p>Leads</p>
            </div>

            <div className="stat-box">
              <h4>24</h4>
              <p>New</p>
            </div>

            <div className="stat-box">
              <h4>82%</h4>
              <p>Response</p>
            </div>
          </div>

          <table className="preview-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John D.</td>
                <td>
                  <span className="new">New</span>
                </td>
              </tr>

              <tr>
                <td>Sarah K.</td>
                <td>
                  <span className="contacted">Contacted</span>
                </td>
              </tr>

              <tr>
                <td>Alex M.</td>
                <td>
                  <span className="qualified">Qualified</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Hero;
