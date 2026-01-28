import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

export default function ProductCard({ id, title, price, image }) {
  const { addToCart } = useContext(CartContext);
  const { setTheme } = useContext(ThemeContext);

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });

    // Change theme when user adds product
    setTheme("dark");

    // Show popup
    setShowPopup(true);

    // Hide popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="relative group backdrop-blur-lg border border-white/10 rounded-2xl bg-white/10">

      {/* ✅ Popup Message */}
      {showPopup && (
        <div className="absolute top-3 right-3 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-bounce">
           Added to Cart
        </div>
      )}

      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-cyan-400 mt-2 font-bold text-xl">₹{price}</p>

        <button 
          onClick={handleAddToCart}
          className="mt-5 w-full py-2 rounded-lg bg-linear-to-r from-purple-600 to-cyan-500 hover:opacity-90 transition"
        >
          Add to Cart 
        </button>
      </div>
    </div>
  );
}
