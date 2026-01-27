export default function Header() {
  return (
    <section className="pt-36 pb-24 text-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="w-72 h-72 bg-purple-500/30 blur-3xl rounded-full absolute top-10 left-20"></div>
        <div className="w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full absolute bottom-10 right-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
       <h2 className="text-5xl md:text-7xl font-black tracking-wide">

          Upgrade Your <br />
          <span className="bg-linear-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent font-black">

            Digital Lifestyle
          </span>
        </h2>

       <p className="mt-6 text-yellow-100 text-xl font-semibold">

          Discover futuristic gadgets with premium design and performance.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/30">
            Shop Now
          </button>
          <button className="px-7 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
