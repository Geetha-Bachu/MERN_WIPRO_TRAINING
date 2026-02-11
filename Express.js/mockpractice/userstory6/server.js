const express = require("express");
const morgan = require("morgan");

const connectDB = require("./config/db");
const requestLogger = require("./middleware/requestLogger");

const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use(morgan("dev"));

app.use(requestLogger);

app.use("/auth", authRoutes);

app.use("/inventory", inventoryRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
