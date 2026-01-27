import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  const API = "http://localhost:5000/products";

  // ✅ FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("Server not responding");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("❌ Backend server not running (start json-server)");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ CHECK ADMIN
  const isAdmin = user?.role === "admin";

  const adminOnly = () => {
    alert("🚫 Only Admin can perform this action!");
    navigate("/login");
  };

  // ✅ ADD PRODUCT
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!isAdmin) return adminOnly();

    const newProduct = { title, price: Number(price), image };

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    fetchProducts();
    setTitle("");
    setPrice("");
    setImage("");
  };

  // ✅ DELETE PRODUCT
  const handleDelete = async (id) => {
    if (!isAdmin) return adminOnly();

    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  // ✅ EDIT PRODUCT
  const handleEdit = (p) => {
    if (!isAdmin) return adminOnly();

    setEditId(p.id);
    setTitle(p.title);
    setPrice(p.price);
    setImage(p.image);
  };

  // ✅ UPDATE PRODUCT
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!isAdmin) return adminOnly();

    const updatedProduct = { title, price: Number(price), image };

    await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });

    fetchProducts();
    setEditId(null);
    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-center mb-6">
        Products 🛍️
      </h2>

      {/* ❌ BACKEND ERROR */}
      {error && (
        <div className="bg-red-500/20 text-red-400 p-3 rounded text-center mb-6">
          {error}
        </div>
      )}

      {/* 👑 ADMIN FORM */}
      {isAdmin && (
        <div className="bg-white/20 p-6 rounded-xl mb-10">
          <h3 className="text-xl font-bold mb-4">
            {editId ? "Update Product" : "Add Product"}
          </h3>

          <form onSubmit={editId ? handleUpdate : handleAdd} className="grid md:grid-cols-4 gap-3">
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              className="p-2 rounded text-black"
              required
            />
            <input
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Price"
              className="p-2 rounded text-black"
              required
            />
            <input
              value={image}
              onChange={e => setImage(e.target.value)}
              placeholder="Image URL"
              className="p-2 rounded text-black"
              required
            />
            <button className="bg-yellow-400 text-black font-bold rounded px-4 py-2">
              {editId ? "Update" : "Add"}
            </button>
          </form>
        </div>
      )}

      {/* 🛍️ PRODUCT LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id}>
            <ProductCard {...p} />

            {/* 👑 ADMIN BUTTONS */}
            {isAdmin && (
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="bg-blue-500 px-3 py-1 rounded text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-500 px-3 py-1 rounded text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 👤 USER MESSAGE */}
      {!isAdmin && (
        <p className="text-center text-yellow-300 mt-8">
          ⚠️ You are in view-only mode. Login as admin to manage products.
        </p>
      )}
    </div>
  );
}
