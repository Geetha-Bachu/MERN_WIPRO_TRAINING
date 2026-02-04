import InventoryCard from "./InventoryCard";

function InventoryList({ products }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <InventoryCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default InventoryList;
