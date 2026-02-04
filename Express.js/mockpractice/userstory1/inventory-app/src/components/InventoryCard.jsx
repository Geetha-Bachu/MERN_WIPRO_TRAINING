import { useState } from "react";

function InventoryCard(props) {
  const { name, price, category } = props;

  const [favorite, setFavorite] = useState(false);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">Category: {category}</p>

        <button
          className={`btn ${favorite ? "btn-success" : "btn-outline-primary"}`}
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? "Favorited" : "Add to Favorite"}
        </button>
      </div>
    </div>
  );
}

export default InventoryCard;
