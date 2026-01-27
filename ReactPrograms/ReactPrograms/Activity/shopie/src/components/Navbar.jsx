import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-black text-yellow-300">
          NeoStore
        </h1>

        <ul className="flex gap-8 font-bold text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-300">
              Products
            </Link>
          </li>
          <li>
  <Link to="/contact" className="hover:text-yellow-300">
    Contact
  </Link>
</li>
<li>
  <Link to="/cart" className="hover:text-yellow-300">
    Cart 🛒
  </Link>
</li>

        </ul>

      </div>
    </nav>
  );
}
