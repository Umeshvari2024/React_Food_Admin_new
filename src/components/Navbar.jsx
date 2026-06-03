import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h4 className="text-warning">🍽 FoodPro</h4>

      <div>
        <Link to="/dashboard" className="btn btn-light me-2">
          Dashboard
        </Link>

        <Link to="/food" className="btn btn-warning me-2">
          Food ({cart.length})
        </Link>

        <Link to="/contact" className="btn btn-info btn-sm">
  Contact
</Link>

<Link to="/profile" className="btn btn-success btn-sm">
  Profile
</Link>
<Link to="/chat" className="btn btn-secondary btn-sm">
  Chat
</Link>


        <button onClick={logout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;