function Card({ title }) {
  return (
    <div className="card p-3">
      <h5>{title}</h5>
      <button className="btn btn-primary mt-2">Order</button>
    </div>
  )
}

export default Card