import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Food() {
  const navigate = useNavigate();

  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

const handleAddToCart = (item) => {
  addToCart(item);

  setSuccessMsg(`✅ ${item.name} added to cart successfully!`);

  setTimeout(() => {
    setSuccessMsg("");
  }, 3000);
};

const sendMessage = () => {
  if (message.trim() === "") return;

  alert("Message Sent: " + message);

  setMessage("");
};

  const foods = [
    {
      id: 1,
      name: "Pizza",
      restaurant: "Dominos",
      category: "Fast Food",
      price: 299,
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
      id: 2,
      name: "Burger",
      restaurant: "Burger King",
      category: "Fast Food",
      price: 199,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      id: 3,
      name: "Pasta",
      restaurant: "La Italia",
      category: "Italian",
      price: 249,
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
    },
    {
      id: 4,
      name: "Biryani",
      restaurant: "Biryani House",
      category: "Indian",
      price: 349,
      img: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd"
    },
    {
      id: 5,
      name: "Momos",
      restaurant: "Chinese Corner",
      category: "Chinese",
      price: 149,
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec"
    },
    {
      id: 6,
      name: "French Fries",
      restaurant: "Snack Hub",
      category: "Snacks",
      price: 99,
      img: "https://images.unsplash.com/photo-1576107232684-1279f390859f"
    },
    {
  id: 7,
  name: "Paneer Tikka",
  restaurant: "Punjabi Tadka",
  category: "Indian",
  price: 279,
  img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8"
},
{
  id: 8,
  name: "Chicken Shawarma",
  restaurant: "Arabian Bites",
  category: "Fast Food",
  price: 229,
  img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783"
},
{
  id: 9,
  name: "Veg Noodles",
  restaurant: "Chinese Corner",
  category: "Chinese",
  price: 189,
  img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841"
},
{
  id: 10,
  name: "Dosa",
  restaurant: "South Spice",
  category: "South Indian",
  price: 149,
  img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
},
{
  id: 11,
  name: "Idli Sambhar",
  restaurant: "Madras Cafe",
  category: "South Indian",
  price: 119,
  img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
},
{
  id: 12,
  name: "Cold Coffee",
  restaurant: "Cafe Mocha",
  category: "Beverages",
  price: 129,
  img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
},
{
  id: 13,
  name: "Chocolate Cake",
  restaurant: "Sweet Treats",
  category: "Desserts",
  price: 199,
  img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
},
{
  id: 14,
  name: "Ice Cream",
  restaurant: "Cream Bell",
  category: "Desserts",
  price: 99,
  img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
},
{
  id: 15,
  name: "Maharaja Thali",
  restaurant: "Royal Thali",
  category: "Indian",
  price: 399,
  img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe"
},
{
  id: 16,
  name: "Sandwich",
  restaurant: "Snack Hub",
  category: "Snacks",
  price: 129,
  img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
},
{
  id: 17,
  name: "Tandoori Chicken",
  restaurant: "BBQ Nation",
  category: "Indian",
  price: 349,
  img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
},
{
  id: 18,
  name: "Fried Rice",
  restaurant: "Dragon Wok",
  category: "Chinese",
  price: 199,
  img: "https://images.unsplash.com/photo-1512058564366-18510be2db19"
},
{
  id: 19,
  name: "Samosa",
  restaurant: "Tea Time",
  category: "Snacks",
  price: 49,
  img: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
},
{
  id: 20,
  name: "Mango Shake",
  restaurant: "Juice World",
  category: "Beverages",
  price: 99,
  img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4"
}

    
  ];

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container mt-4">

      {/* ABOUT SECTION */}

      <div className="card shadow-lg p-5 mb-5 text-center">
        <h1 className="mb-3">
          🍽 Welcome To FoodPro
        </h1>

        <p className="lead text-muted">
          India's Trusted Online Food Delivery Platform
        </p>

        <div className="row mt-4">
          <div className="col-md-3">
            <h2>🚀</h2>
            <h5>Fast Delivery</h5>
            <p>Food delivered in 30 minutes.</p>
          </div>

          <div className="col-md-3">
            <h2>🍔</h2>
            <h5>100+ Foods</h5>
            <p>Large variety of delicious meals.</p>
          </div>

          <div className="col-md-3">
            <h2>⭐</h2>
            <h5>Best Quality</h5>
            <p>Fresh ingredients every day.</p>
          </div>

          <div className="col-md-3">
            <h2>👨‍🍳</h2>
            <h5>Expert Chefs</h5>
            <p>Prepared by professional chefs.</p>
          </div>
        </div>
      </div>

      {/* TITLE */}

      <div className="text-center mb-4">
        <h1>🍔 Food Menu</h1>

        <p className="text-muted">
          Delicious food delivered to your doorstep
        </p>
      </div>
     {successMsg && (
  <div
    className="alert alert-success text-center mb-3"
    style={{
      position: "sticky",
      top: "10px",
      zIndex: 9999
    }}
  >
    {successMsg}
  </div>
)}

      {/* CART COUNT */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>🛒 Cart Items: {cart.length}</h4>
      </div>

      {/* SEARCH */}

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CATEGORY FILTER */}

      <select
        className="form-select mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Fast Food">Fast Food</option>
        <option value="Italian">Italian</option>
        <option value="Indian">Indian</option>
        <option value="Chinese">Chinese</option>
        <option value="Snacks">Snacks</option>
        <option value="South Indian">South Indian</option>
<option value="Desserts">Desserts</option>
<option value="Beverages">Beverages</option>
      </select>

      {/* FOOD ITEMS */}

     <div className="row">

{foods
.filter((item) =>
item.name
.toLowerCase()
.includes(search.toLowerCase())
)
.filter(
(item) =>
category === "" ||
item.category === category
)
.map((item) => ( 
<ProductCard
  key={item.id}
  product={item}
  addToCart={handleAddToCart}
/>
))}

</div>


      {/* CART */}

      <div className="card shadow p-4 mt-5">

        <h3>🛒 Your Cart</h3>

        {cart.length === 0 ? (
          <p>No Items Added</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >

              <div>
                <h6>{item.name}</h6>

                <p>
                  ₹{item.price} × {item.qty}
                </p>
              </div>

              <div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                >
                  -
                </button>

                <span className="mx-3">
                  {item.qty}
                </span>

                <button
                  className="btn btn-success btn-sm"
                  onClick={() =>
                    increaseQty(item.id)
                  }
                >
                  +
                </button>
              </div>

            </div>
          ))
        )}

        <h4 className="mt-3">
          Total: ₹ {total}
        </h4>

        <button
          className="btn btn-primary mt-2"
          onClick={() =>
            navigate("/checkout")
          }
        >
          Proceed To Checkout
        </button>

      </div>

<div
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "260px",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
    zIndex: 9999
  }}
>
  <h6>💬 Chat</h6>

  <input
    className="form-control mb-2"
    placeholder="Type message..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />

  <button
    className="btn btn-dark w-100"
    onClick={sendMessage}
  >
    Send
  </button>
</div>
      {/* WHY CHOOSE US */}

      <div className="card shadow p-5 mt-5">

        <h2 className="text-center mb-4">
          Why Choose FoodPro?
        </h2>

        <div className="row">

          <div className="col-md-4 text-center">
            <h1>🔥</h1>
            <h5>Trending Foods</h5>
            <p>
              Discover the most popular dishes loved by customers.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <h1>💳</h1>
            <h5>Secure Payments</h5>
            <p>
              Safe and secure online payment options.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <h1>🎁</h1>
            <h5>Special Offers</h5>
            <p>
              Exciting discounts and cashback offers.
            </p>
          </div>

        </div>

      </div>



    </div>
    
  );
}

export default Food;