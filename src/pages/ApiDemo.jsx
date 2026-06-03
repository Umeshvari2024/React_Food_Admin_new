import { useState } from "react";

function ApiDemo() {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Pizza",
      category: "Fast Food",
      price: 299,
    },
    {
      id: 2,
      name: "Burger",
      category: "Fast Food",
      price: 199,
    },
    {
      id: 3,
      name: "Biryani",
      category: "Indian",
      price: 349,
    },
    {
      id: 4,
      name: "Pasta",
      category: "Italian",
      price: 249,
    },
  ]);

  // POST
  const handlePost = () => {
    const newFood = {
      id: foods.length + 1,
      name: "Momos",
      category: "Chinese",
      price: 149,
    };

    setFoods([...foods, newFood]);
    alert("POST Success - New Food Added");
  };

  // PUT
  const handlePut = () => {
    const updatedFoods = foods.map((food) =>
      food.id === 1
        ? {
            ...food,
            name: "Large Pizza",
            category: "Fast Food",
            price: 399,
          }
        : food
    );

    setFoods(updatedFoods);
    alert("PUT Success - Pizza Updated");
  };

  // PATCH
  const handlePatch = () => {
    const patchedFoods = foods.map((food) =>
      food.id === 2
        ? {
            ...food,
            price: 249,
          }
        : food
    );

    setFoods(patchedFoods);
    alert("PATCH Success - Burger Price Updated");
  };

  // DELETE
  const handleDelete = () => {
    const filteredFoods = foods.filter(
      (food) => food.id !== 4
    );

    setFoods(filteredFoods);
    alert("DELETE Success - Pasta Removed");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        🌐 FoodPro API Demo
      </h2>

      <div className="mb-4">
        <button
          className="btn btn-success me-2"
          onClick={handlePost}
        >
          POST Food
        </button>

        <button
          className="btn btn-primary me-2"
          onClick={handlePut}
        >
          PUT Food
        </button>

        <button
          className="btn btn-warning me-2"
          onClick={handlePatch}
        >
          PATCH Food
        </button>

        <button
          className="btn btn-danger"
          onClick={handleDelete}
        >
          DELETE Food
        </button>
      </div>

      <div className="row">
        {foods.map((food) => (
          <div
            key={food.id}
            className="col-md-3 mb-3"
          >
            <div className="card shadow p-3">
              <h5>{food.name}</h5>

              <p>
                Category: {food.category}
              </p>

              <p>
                Price: ₹{food.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiDemo;