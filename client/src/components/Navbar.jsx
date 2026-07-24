import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        LeadDesk <span>Mini</span>
      </h2>

      <button className="login-btn">
        Dashboard Login
      </button>
    </nav>
  );
}

export default Navbar;