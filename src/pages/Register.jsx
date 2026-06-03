import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="auth-bg register-bg">
      <div className="auth-card">

        <h2>Register</h2>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="mt-3">
          Already have account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;