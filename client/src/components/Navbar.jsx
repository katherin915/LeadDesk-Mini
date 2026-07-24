import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="logo">
        LeadDesk <span>Mini</span>
      </h2>

      <button
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        Dashboard Login
      </button>
    </nav>
  );
}

export default Navbar;