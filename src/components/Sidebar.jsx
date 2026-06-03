import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={`sidebar ${open ? "show-sidebar" : ""}`}>
        <div>
          <div className="sidebar-logo">
            <h2>🍽 FoodPro</h2>
            <p>Admin Panel</p>
          </div>

          <hr />

          <ul className="sidebar-menu">
            <li>
              <Link to="/dashboard">📊 Dashboard</Link>
            </li>

            <li>
              <Link to="/food">🍔 Food Menu</Link>
            </li>

            <li>
              <Link to="/chat">💬 Chat</Link>
            </li>

            <li>
              <Link to="/contact">📞 Contact</Link>
            </li>

            <li>
              <Link to="/profile">👤 Profile</Link>
            </li>
            <li>
  <Link to="/api">🌐 API Demo</Link>
</li>

            <li>
              <Link to="/checkout">💳 Payments</Link>
            </li>
          </ul>
        </div>

        <button
          className="btn btn-danger w-100"
          onClick={logout}
        >
          🚪 Logout
        </button>
      </div>
    </>
  );
}

export default Sidebar;