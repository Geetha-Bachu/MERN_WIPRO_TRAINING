import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Your Cart 🛒</h2>

      {cart.length === 0 && <p className="text-center">Cart is empty 😢</p>}

      <div className="grid md:grid-cols-3 gap-6">
        {cart.map(item => (
          <div key={item.id} className="bg-white/10 p-4 rounded-xl">
            <img src={item.image} className="h-40 w-full object-cover rounded" />
            <h3 className="mt-3 font-bold">{item.title}</h3>
            <p className="text-yellow-300">₹{item.price}</p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-3 bg-red-500 px-4 py-1 rounded"
            >
              Remove 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
