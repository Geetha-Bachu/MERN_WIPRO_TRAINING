import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:3000/products";

  // ✅ GET PRODUCTS
  const fetchProducts = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ ADD PRODUCT (POST)
  
  const handleAdd = async (e) => {
  e.preventDefault();

  if (!title || !price || !image) {
    alert("❗ Please fill all fields");
    return;
  }

  const newProduct = {
    title,
    price: Number(price),
    image
  };

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    });

    if (!res.ok) {
      throw new Error("Server error");
    }

    const data = await res.json();

    alert("✅ Product Added Successfully!");
    console.log("Added:", data);

    fetchProducts();
    setTitle("");
    setPrice("");
    setImage("");

  } catch (error) {
    console.error("❌ Add error:", error);
    alert("❌ Failed to add product");
  }
};

  // ✅ DELETE PRODUCT
  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    alert("🗑️ Product Deleted!");
    fetchProducts();
  };

  // ✅ EDIT PRODUCT
  const handleEdit = (product) => {
    setEditId(product.id);
    setTitle(product.title);
    setPrice(product.price);
    setImage(product.image);
  };

  // ✅ UPDATE PRODUCT (PUT)
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      title,
      price: Number(price),
      image
    };

    await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct)
    });

    alert("✏️ Product Updated!");

    fetchProducts();
    setEditId(null);
    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-center mb-6">
        Products CRUD Page 🛠️
      </h2>

      {/* FORM */}
      <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {editId ? "Update Product" : "Add Product"}
        </h2>

        <form onSubmit={editId ? handleUpdate : handleAdd} className="grid md:grid-cols-4 gap-4">
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

      {/* PRODUCTS LIST */}
      <div className="grid md:grid-cols-3 gap-8">
        {products.map(p => (
          <div key={p.id} className="relative">
            <ProductCard {...p} />

            <div className="flex gap-3 mt-3">
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
          </div>
        ))}
      </div>

    </div>
  );
}
