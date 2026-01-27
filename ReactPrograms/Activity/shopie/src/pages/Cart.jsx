import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, decreaseQuantity, removeItem } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Your Cart 🛒 ({cart.length})
      </h2>

      {cart.length === 0 && <p className="text-center">Cart is empty 😢</p>}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {cart.map(item => (
          <div key={item.id} className="bg-white/10 p-5 rounded-xl">
            
            <img src={item.image} className="h-40 w-full object-cover rounded" />

            <h3 className="mt-3 font-bold text-lg">{item.title}</h3>
            <p className="text-yellow-300">₹{item.price}</p>

            <p className="mt-2 font-semibold">
              Quantity: {item.quantity}
            </p>

            {/*  BUTTONS */}
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-red-500 px-3 py-1 rounded text-white text-lg"
              >
                −
              </button>

              <button
                onClick={() => addToCart(item)}
                className="bg-green-500 px-3 py-1 rounded text-white text-lg"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="mt-4 bg-black px-4 py-1 rounded text-white"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-10 text-right">
        Total Price: ₹{total}
      </h3>
    </div>
  );
}
