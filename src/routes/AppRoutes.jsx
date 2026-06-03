import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Food from "./pages/Food";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function Layout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/food" element={<Food />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;