function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">

        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h4 className="text-warning">🍽 FoodPro</h4>
            <p>
              FoodPro is a modern food delivery platform
              offering fast, fresh and delicious meals
              directly to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/dashboard" className="text-white text-decoration-none">Dashboard</a></li>
              <li><a href="/food" className="text-white text-decoration-none">Food Menu</a></li>
              <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>

            <p>📍 Pune, Maharashtra, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉ support@foodpro.com</p>

            <div className="fs-4">
              🌐 📘 📷 🐦
            </div>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">
            © 2026 FoodPro | Designed with React & Bootstrap |
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;