const express = require("express");
require("dotenv").config();

const { sequelize } = require("./models");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();

app.use(express.json());

app.use("/api", transactionRoutes);

sequelize.sync({alter:true})
.then(()=>{
  console.log("Database Synced");
});

app.listen(process.env.PORT, ()=>{
  console.log("Server running on port 3000");
});
