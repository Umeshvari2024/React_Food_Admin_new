import Sidebar from "../components/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const stats = [
    { title: "Users", value: 1250, icon: "👥" },
    { title: "Orders", value: 350, icon: "📦" },
    { title: "Revenue", value: "₹75K", icon: "💰" },
    { title: "Food Items", value: 25, icon: "🍔" },
  ];

  const chartData = [
    { name: "Mon", orders: 30 },
    { name: "Tue", orders: 50 },
    { name: "Wed", orders: 40 },
    { name: "Thu", orders: 70 },
    { name: "Fri", orders: 90 },
    { name: "Sat", orders: 120 },
    { name: "Sun", orders: 80 },
  ];

  const orders = [
    { id: 1, food: "Pizza", status: "Delivered", price: 299 },
    { id: 2, food: "Burger", status: "Pending", price: 199 },
    { id: 3, food: "Biryani", status: "Delivered", price: 349 },
    { id: 4, food: "Pasta", status: "Cancelled", price: 249 },
  ];

  return (
    <div
      style={{
        display: "flex",
        background: "#f1f5f9",
        minHeight: "100vh",
      }}
    >
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      
      <div className="dashboard-content">
        {/* HEADER */}
        <div className="dashboard-header shadow-sm">
          <div>
            <h2>📊 FoodPro Dashboard</h2>
            <p>Welcome Back Admin 👋</p>
          </div>

          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
              width="50"
            />
          </div>
        </div>

        {/* STATS */}
        <div className="row mt-4">
          {stats.map((s, i) => (
            <div className="col-md-3 col-6 mb-4" key={i}>
              <div className="card dashboard-card shadow">
                <h1>{s.icon}</h1>
                <h5>{s.title}</h5>
                <h3>{s.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CHART */}
        <div className="card shadow p-4">
          <h4>📈 Weekly Orders Analytics</h4>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="orders"
                fill="#0d6efd"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* QUICK ACTIONS */}
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card shadow p-4 text-center">
              <h1>🍔</h1>
              <h5>Add Food</h5>

              <button className="btn btn-success">
                Add Food
              </button>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow p-4 text-center">
              <h1>📦</h1>
              <h5>Manage Orders</h5>

              <button className="btn btn-primary">
                Orders
              </button>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow p-4 text-center">
              <h1>👥</h1>
              <h5>Users</h5>

              <button className="btn btn-dark">
                View Users
              </button>
            </div>
          </div>
        </div>

        {/* ORDER STATUS */}
        <div className="card shadow p-4 mt-4">
          <h4>🚚 Order Status</h4>

          <div className="mb-3">
            <label>Delivered</label>

            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>Pending</label>

            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "20%" }}
              >
                20%
              </div>
            </div>
          </div>

          <div>
            <label>Cancelled</label>

            <div className="progress">
              <div
                className="progress-bar bg-danger"
                style={{ width: "5%" }}
              >
                5%
              </div>
            </div>
          </div>
        </div>

        {/* RECENT ORDERS */}
        <div className="card shadow p-4 mt-4">
          <h4>📦 Recent Orders</h4>

          <table className="table mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Food</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.food}</td>

                  <td>
                    <span
                      className={
                        o.status === "Delivered"
                          ? "badge bg-success"
                          : o.status === "Pending"
                          ? "badge bg-warning"
                          : "badge bg-danger"
                      }
                    >
                      {o.status}
                    </span>
                  </td>

                  <td>₹{o.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RECENT USERS */}
        <div className="card shadow p-4 mt-4 mb-5">
          <h4>👥 Recent Users</h4>

          <table className="table mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul</td>
                <td>rahul@gmail.com</td>
                <td>
                  <span className="badge bg-success">
                    Active
                  </span>
                </td>
              </tr>

              <tr>
                <td>Priya</td>
                <td>priya@gmail.com</td>
                <td>
                  <span className="badge bg-warning">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>Amit</td>
                <td>amit@gmail.com</td>
                <td>
                  <span className="badge bg-success">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;