import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// test middleware (optional but helpful)
app.use((req, res, next) => {
  console.log("API HIT:", req.method, req.url);
  next();
});

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Chair", price: 3000 }
];

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET product by id
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on http://127.0.0.1:5000");
  console.log("Product API: http://127.0.0.1:5000/products");
});
