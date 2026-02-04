const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Products data
const products = [
  { id: 1, name: "Laptop", price: 800, description: "High performance laptop" },
  { id: 2, name: "Mobile", price: 500, description: "Latest smartphone" },
  { id: 3, name: "Headphones", price: 150, description: "Noise cancelling headphones" }
];

// GET all products
app.get("/products", (req, res) => {
  console.log("GET → /products");
  res.status(200).json(products);
});

// GET product by ID
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  console.log(`GET → /products/${req.params.id}`);

  // Check if ID is a number
  if (isNaN(id)) {
    return res.status(400).json({
      message: "Invalid product ID. Please use a number like /products/1"
    });
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: `Product with ID ${id} not found`
    });
  }

  res.status(200).json(product);
});


app.get("/", (req, res) => {
  res.send("Backend is running ");
});

// Start server
app.listen(PORT, () => {
  
  console.log(`Backend server running on port ${PORT}`);
  console.log(` http://localhost:${PORT}/products`);
  console.log(` http://localhost:${PORT}/products/1`);
 
});
