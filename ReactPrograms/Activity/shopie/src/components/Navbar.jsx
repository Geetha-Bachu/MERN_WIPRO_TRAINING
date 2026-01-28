import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Correct cart count
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setTheme("light"); // optional theme change on logout
    navigate("/login", { replace: true });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-3xl font-black text-yellow-300 cursor-pointer">
          <Link to="/">NeoStore</Link>
        </h1>

        {/* MENU */}
      <ul className="flex gap-6 font-bold text-lg items-center">

  {/* Normal Pages */}
  <li><Link to="/">Home</Link></li>
  <li><Link to="/products">Products</Link></li>

  <li><Link to="/contact">Contact</Link></li>

  <li>
    <Link to="/cart">
      Cart 🛒 <span className="text-yellow-300">({cartCount})</span>
    </Link>
  </li>

  {/* ✅ ADMIN PRODUCTS (CRUD PAGE) */}
  {user?.role === "admin" && (
    <li>
      <Link to="/products" className="text-yellow-300 font-bold">
        Products
      </Link>
    </li>
  )}

  {/* AUTH SECTION */}
  {!user ? (
    <>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </>
  ) : (
    <li className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 bg-black/40 rounded-lg text-white flex items-center gap-2 hover:bg-black/60 transition"
      >
        👤 {user.email.split("@")[0]}
        <span className="text-xs bg-yellow-400 text-black px-2 rounded">
          {user.role}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-black/90 text-white rounded-lg shadow-lg w-44 overflow-hidden">
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-red-500 transition"
          >
            Logout
          </button>
        </div>
      )}
    </li>
  )}
</ul>

        
      </div>
    </nav>
  );
}
