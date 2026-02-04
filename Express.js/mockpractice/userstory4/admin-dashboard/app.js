const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); // IMPORTANT for forms
app.use(express.json());

app.set("view engine", "ejs");

// dummy product data (in-memory)
let products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 }
];

// dashboard
app.get("/", (req, res) => {
  res.render("dashboard", { products });
});

// add product (POST)
app.post("/add-product", (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: Date.now(),
    name,
    price
  };

  products.push(newProduct);
  res.redirect("/");
});

// delete product (POST)
app.post("/delete-product/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter(p => p.id !== id);
  res.redirect("/");
});

// error route
app.get("/error", (req, res) => {
  throw new Error("Something went wrong");
});

// error handling middleware
app.use((err, req, res, next) => {
  console.log("Error:", err.message);
  res.status(500).send("Internal Server Error");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
