const express = require("express");
require("dotenv").config();

const { sequelize } = require("./models");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

app.use(express.json());

app.use("/reports", reportRoutes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database Synced");
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
