export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            NeoStore
          </h3>
          <p className="mt-4 text-gray-400 text-sm">
            Futuristic gadgets with premium quality and design.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">Products</li>
            <li className="hover:text-cyan-400 cursor-pointer">About</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-purple-400 cursor-pointer">Help Center</li>
            <li className="hover:text-purple-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-purple-400 cursor-pointer">Terms</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-cyan-400"
            />
            <button className="px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-cyan-500 hover:opacity-90">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 text-center py-6 text-gray-500 text-sm">
        © 2026 NeoStore. All rights reserved.
      </div>
    </footer>
  );
}
