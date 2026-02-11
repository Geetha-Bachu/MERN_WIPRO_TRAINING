const express = require("express");
require("dotenv").config();

const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());

app.use("/api/order", orderRoutes);

app.use((error,req,res,next)=>{
   console.error(error.message);
   res.status(500).json({error:error.message});
});

app.listen(process.env.PORT,()=>{
   console.log("Server running");
});
