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
  img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
},
{
  id: 2,
  name: "Burger",
  restaurant: "Burger King",
  category: "Fast Food",
  price: 199,
  img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
},
{
  id: 3,
  name: "Pasta",
  restaurant: "La Italia",
  category: "Italian",
  price: 249,
  img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800"
},
{
  id: 4,
  name: "Biryani",
  restaurant: "Biryani House",
  category: "Indian",
  price: 349,
  img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800"
},
{
  id: 5,
  name: "Momos",
  restaurant: "Chinese Corner",
  category: "Chinese",
  price: 149,
  img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800"
},
{
  id: 6,
  name: "French Fries",
  restaurant: "Snack Hub",
  category: "Snacks",
  price: 99,
  img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800"
},
{
  id: 7,
  name: "Paneer Tikka",
  restaurant: "Punjabi Tadka",
  category: "Indian",
  price: 279,
  img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800"
},
{
  id: 8,
  name: "Chicken Shawarma",
  restaurant: "Arabian Bites",
  category: "Fast Food",
  price: 229,
  img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800"
},
{
  id: 9,
  name: "Veg Noodles",
  restaurant: "Chinese Corner",
  category: "Chinese",
  price: 189,
  img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800"
},
{
  id: 10,
  name: "Dosa",
  restaurant: "South Spice",
  category: "South Indian",
  price: 149,
  img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800"
},
{
  id: 11,
  name: "Idli Sambhar",
  restaurant: "Madras Cafe",
  category: "South Indian",
  price: 119,
  img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800"
},
{
  id: 12,
  name: "Cold Coffee",
  restaurant: "Cafe Mocha",
  category: "Beverages",
  price: 129,
  img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800"
},
{
  id: 13,
  name: "Chocolate Cake",
  restaurant: "Sweet Treats",
  category: "Desserts",
  price: 199,
  img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
},
{
  id: 14,
  name: "Ice Cream",
  restaurant: "Cream Bell",
  category: "Desserts",
  price: 99,
  img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800"
},
{
  id: 15,
  name: "Maharaja Thali",
  restaurant: "Royal Thali",
  category: "Indian",
  price: 399,
  img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
},
{
  id: 16,
  name: "Sandwich",
  restaurant: "Snack Hub",
  category: "Snacks",
  price: 129,
  img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800"
},
{
  id: 17,
  name: "Tandoori Chicken",
  restaurant: "BBQ Nation",
  category: "Indian",
  price: 349,
  img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800"
},
{
  id: 18,
  name: "Fried Rice",
  restaurant: "Dragon Wok",
  category: "Chinese",
  price: 199,
  img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800"
},
{
  id: 19,
  name: "Samosa",
  restaurant: "Tea Time",
  category: "Snacks",
  price: 49,
  img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800"
},
{
  id: 20,
  name: "Mango Shake",
  restaurant: "Juice World",
  category: "Beverages",
  price: 99,
  img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800"
}
];
    
  

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container mt-4">

      {/* ABOUT SECTION */}

     <div
  className="mb-5"
  style={{
    background:
      "linear-gradient(135deg,#fc8019,#ff9f43)",
    borderRadius: "30px",
    padding: "60px 30px",
    color: "white",
    overflow: "hidden"
  }}
>
  <div className="row align-items-center">

    <div className="col-md-6">

      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold"
        }}
      >
        🍔 Food Delivered
        <br />
        In Minutes
      </h1>

      <p
        style={{
          fontSize: "18px",
          marginTop: "15px"
        }}
      >
        Order Pizza, Burger, Biryani,
        Momos, Dosa and more from
        your favourite restaurants.
      </p>

      <button
  className="btn btn-light btn-lg mt-3"
  onClick={() => {
    document
      .getElementById("food-menu")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  }}
>
  Order Now
</button>

    </div>

    <div className="col-md-6 text-center">

      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        alt="Food"
        style={{
          width: "100%",
          maxHeight: "350px",
          objectFit: "cover",
          borderRadius: "25px"
        }}
      />

    </div>

  </div>
</div>


{/* WHAT'S ON YOUR MIND */}

<div className="container my-5">
  <h2 className="fw-bold mb-4">
    What's on your mind?
  </h2>

  <div className="row text-center">
    {foods.map((item) => (
      <div
        key={item.id}
        className="col-lg-2 col-md-3 col-4 mb-4"
      >
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #fc8019"
          }}
        />

        <h6 className="mt-2">{item.name}</h6>
      </div>
    ))}
  </div>
</div>

{successMsg && (
  <div
    className="alert alert-success text-center"
    style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      zIndex: "99999",
      minWidth: "320px",
      borderRadius: "15px",
      fontWeight: "bold"
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
        className="form-control form-control-lg mb-3"
        placeholder="Search Food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CATEGORY FILTER */}

      <select
        className="form-select form-select-lg mb-4"
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

     <div id="food-menu" className="row">

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

            <div
  className="card shadow-lg p-4 mt-5"
  style={{
    borderRadius: "25px",
    border: "none"
  }}
>
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

{/* DOWNLOAD APP BANNER */}

<div
  className="my-5"
  style={{
    background: "#0f172a",
    borderRadius: "20px",
    padding: "40px"
  }}
>
  <div className="row align-items-center">

    <div className="col-md-6 text-white">
      <h1 className="fw-bold">
        Get The FoodPro App Now!
      </h1>

      <p>
        For best offers and discounts
        curated specially for you.
      </p>
    </div>

    <div className="col-md-6 text-center">
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://foodpro.com"
        alt="QR"
        style={{
          background: "white",
          padding: "10px",
          borderRadius: "15px"
        }}
      />
    </div>

  </div>
</div>


{/* CITIES WITH FOOD DELIVERY */}

<div className="my-5">
  <h2 className="fw-bold mb-4">
    Cities with food delivery
  </h2>

  <div className="row g-3">

    {[
      "Bangalore",
      "Gurgaon",
      "Hyderabad",
      "Delhi",
      "Mumbai",
      "Pune",
      "Kolkata",
      "Chennai",
      "Ahmedabad",
      "Chandigarh",
      "Jaipur"
    ].map((city, index) => (
      <div key={index} className="col-md-3">
        <button
          className="btn w-100"
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "15px"
          }}
        >
          Order food online in {city}
        </button>
      </div>
    ))}

  </div>
</div>


{/* CITIES WITH GROCERY DELIVERY */}

<div className="my-5">
  <h2 className="fw-bold mb-4">
    Cities with grocery delivery
  </h2>

  <div className="row g-3">

    {[
      "Bangalore",
      "Gurgaon",
      "Hyderabad",
      "Delhi",
      "Mumbai",
      "Pune",
      "Kolkata",
      "Chennai",
      "Ahmedabad",
      "Chandigarh",
      "Jaipur"
    ].map((city, index) => (
      <div key={index} className="col-md-3">
        <button
          className="btn w-100"
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "15px"
          }}
        >
          Order grocery delivery in {city}
        </button>
      </div>
    ))}

  </div>
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