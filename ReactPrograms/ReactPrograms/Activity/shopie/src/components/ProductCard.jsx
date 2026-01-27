export default function ProductCard({ id, title, price, image }) {

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = { id, title, price, image };
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("🛒 Product added to cart successfully!");
  };

  return (
    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-3 transition duration-300 shadow-lg hover:shadow-purple-500/30">
      
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500" 
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-cyan-400 mt-2 font-bold text-xl">₹{price}</p>

        <button 
          onClick={addToCart}
          className="mt-5 w-full py-2 rounded-lg bg-linear-to-r from-purple-600 to-cyan-500 hover:opacity-90 transition font-medium"
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
