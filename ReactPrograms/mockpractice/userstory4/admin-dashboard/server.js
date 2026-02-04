const express = require("express");
const morgan = require("morgan");

const app = express();

// middleware for logging
app.use(morgan("dev"));

// built-in middleware
app.use(express.json());

// set EJS
app.set("view engine", "ejs");

// dummy product data
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

// admin dashboard route
app.get("/", (req, res) => {
  res.redirect("/admin");
});


// route to force error (for testing)
app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

// error handling middleware
app.use((err, req, res, next) => {
  console.log("Error:", err.message);
  res.status(500).render("error", { message: err.message });
});

// server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(` Dashboard: http://localhost:${PORT}/admin`);
});
