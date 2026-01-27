import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black tracking-wide mb-4">
          Discover{" "}
          <span className="bg-linear-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
            Premium Products
          </span>
        </h2>

        {/* Info Text */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore our curated collection of high-quality gadgets and accessories.
          Designed for performance, style, and durability — perfect for modern lifestyles.
        </p>

        {/* Small Highlight Line */}
        <p className="mt-3 text-cyan-300 font-semibold">
          Trusted Quality &nbsp; | &nbsp;  Best Prices &nbsp; | &nbsp;  Latest Technology
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

    </section>
  );
}
