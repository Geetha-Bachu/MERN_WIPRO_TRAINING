import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <header className="bg-neutral-900 text-white px-6 py-4 flex items-center justify-between">
      
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="rounded-full"
        />
        <h1 className="text-xl font-bold">Great Learning</h1>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
}

export default Header;
