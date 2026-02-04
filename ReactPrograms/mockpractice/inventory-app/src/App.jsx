import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InventoryList from "./InventoryList";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Chair", price: 3000, category: "Furniture" },
    { id: 3, name: "Mobile", price: 20000, category: "Electronics" },
  ];
  return (
     <div className="container mt-4">
      <h2 className="text-center mb-4">Inventory Catalog</h2>
      <InventoryList products={products} />
    </div>
  );
}
export default App
