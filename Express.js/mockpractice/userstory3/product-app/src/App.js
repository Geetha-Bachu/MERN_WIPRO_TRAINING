
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Products</Link> |{" "}
        <Link to="/add">Add Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
