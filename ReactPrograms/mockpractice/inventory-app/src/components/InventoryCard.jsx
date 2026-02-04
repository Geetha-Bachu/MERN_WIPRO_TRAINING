import { useState } from "react";

function InventoryCard({ product }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ₹{product.price}</p>
        <p className="card-text">Category: {product.category}</p>

        <button
          className="btn btn-sm btn-primary"
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? "★ Favorite" : "☆ Add to Favorite"}
        </button>
      </div>
    </div>
  );
}

export default InventoryCard;
