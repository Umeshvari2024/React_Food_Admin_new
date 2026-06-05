const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Watch" }
]

function Products() {
  return (
    <div className="container mt-4">

      <h2>Products</h2>

      <div className="row">

        {products.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card p-3">
              <h5>{item.name}</h5>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Products