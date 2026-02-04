import InventoryCard from "./InventoryCard";

function InventoryList() {
  const products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics" },
    { id: 2, name: "Chair", price: 120, category: "Furniture" },
    { id: 3, name: "Headphones", price: 60, category: "Accessories" },
  ];

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <InventoryCard
            name={product.name}
            price={product.price}
            category={product.category}
          />
        </div>
      ))}
    </div>
  );
}

export default InventoryList;
