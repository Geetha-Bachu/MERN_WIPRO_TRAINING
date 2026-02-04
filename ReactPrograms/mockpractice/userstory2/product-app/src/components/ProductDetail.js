import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h3 className="text-center">Loading...</h3>;
  if (error) return <h3 className="text-danger text-center">{error}</h3>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>Price: ${product.price}</h4>
      <Link to="/" className="btn btn-primary mt-3">Back to Products</Link>
    </div>
  );
}

export default ProductDetail;
