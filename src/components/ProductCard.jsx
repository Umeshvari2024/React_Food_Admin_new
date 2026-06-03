function ProductCard({ product, addToCart }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100">

        <img
          src={product.img}
          alt={product.name}
          className="card-img-top"
          style={{
            height: "220px",
            objectFit: "cover"
          }}
        />

        <div className="card-body">

          <h5>{product.name}</h5>

          <p>
            <strong>Restaurant:</strong> {product.restaurant}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <h6>₹ {product.price}</h6>

          <button
            className="btn btn-success w-100"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;