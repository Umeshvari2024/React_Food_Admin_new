import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="container text-center mt-5">

      <div className="card shadow p-5">

        <h1 className="text-success">✅</h1>

        <h2>Order Placed Successfully!</h2>

        <p className="text-muted">
          Thank you for ordering with FoodPro.
        </p>

        <Link
          to="/food"
          className="btn btn-warning mt-3"
        >
          Order More Food
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;