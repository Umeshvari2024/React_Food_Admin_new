import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      email === user.email &&
      password === user.password
    ) {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="auth-bg login-bg">
      <div className="auth-card">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

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
            Login
          </button>

        </form>

        <p className="mt-3">
          Don't have account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;