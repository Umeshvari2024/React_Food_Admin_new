import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("🎉 Order Placed Successfully!");

    localStorage.removeItem("cart");

    navigate("/success");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">
              🛒 Checkout & Payment
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                className="form-control mb-3"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                name="address"
                className="form-control mb-3"
                placeholder="Delivery Address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
              />

              <input
                type="text"
                name="city"
                className="form-control mb-3"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />

              <input
                type="text"
                name="pincode"
                className="form-control mb-3"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
              />

              <select
                name="payment"
                className="form-select mb-3"
                value={formData.payment}
                onChange={handleChange}
              >
                <option>Cash on Delivery</option>
                <option>UPI</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
              </select>

              {/* UPI Payment */}
              {formData.payment === "UPI" && (
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter UPI ID"
                />
              )}

              {/* Card Payment */}
              {(formData.payment === "Credit Card" ||
                formData.payment === "Debit Card") && (
                <>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Card Number"
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Card Holder Name"
                  />

                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Expiry Date (MM/YY)"
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Place Order
              </button>
            </form>

            <div className="mt-4 text-center">
              <h5>🔒 Secure Payment</h5>
              <p className="text-muted">
                UPI • Credit Card • Debit Card • Cash on Delivery
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;