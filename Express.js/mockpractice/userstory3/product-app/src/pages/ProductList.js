import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
