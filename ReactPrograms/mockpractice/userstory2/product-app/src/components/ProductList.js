import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3 className="text-center">Loading...</h3>;
  if (error) return <h3 className="text-danger text-center">{error}</h3>;

  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      <ul className="list-group">
        {products.map(product => (
          <li key={product.id} className="list-group-item">
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
