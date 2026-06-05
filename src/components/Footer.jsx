function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1d1d1d",
        color: "#ffffff",
        padding: "60px 20px",
        marginTop: "50px",
      }}
    >
      <div className="container">
        <div className="row">

          {/* Logo Section */}
          <div className="col-md-3 mb-4">
            <h1
              style={{
                color: "#fc8019",
                fontWeight: "bold",
              }}
            >
              🍽 FoodPro
            </h1>

            <p style={{ color: "#cccccc" }}>
              © 2026 FoodPro Limited
            </p>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">
              Company
            </h5>

            <p>About Us</p>
            <p>Careers</p>
            <p>Team</p>
            <p>FoodPro One</p>
            <p>FoodPro Instamart</p>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">
              Contact Us
            </h5>

            <p>Help & Support</p>
            <p>Partner With Us</p>
            <p>Ride With Us</p>

            <h5 className="fw-bold mt-4 mb-3">
              Legal
            </h5>

            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>

          {/* Available Cities */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">
              Available In
            </h5>

            <p>Bangalore</p>
            <p>Mumbai</p>
            <p>Pune</p>
            <p>Delhi</p>
            <p>Hyderabad</p>
            <p>Chennai</p>

            <h5 className="fw-bold mt-4 mb-3">
              Social Links
            </h5>

            <div style={{ fontSize: "28px" }}>
              📘 📷 🐦 ▶️
            </div>
          </div>

        </div>

        <hr
          style={{
            borderColor: "#444",
          }}
        />

        <div className="text-center">
          <p
            style={{
              color: "#cccccc",
              marginBottom: 0,
            }}
          >
            © 2026 FoodPro | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;