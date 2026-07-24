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
          Capture, organize and manage customer leads from one
          secure dashboard built for growing businesses.
        </p>

        <div className="hero-buttons">

          <a href="#demo">
          <button className="primary-btn">
            Request Demo
          </button>
          </a>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard-card">

          Dashboard Preview

        </div>

      </div>

    </section>
  );
}

export default Hero;