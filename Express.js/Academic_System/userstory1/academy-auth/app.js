const express = require("express");
const session = require("express-session");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.urlencoded({extended:true}));

// SESSION middleware each user get unique ID
app.use(session({
   secret:"secret-key",
   resave:false,
   saveUninitialized:true
}));

// EJS
app.set("view engine","ejs");

// ROUTES
app.use("/",authRoutes);

app.listen(3000,()=>{
   console.log("Server running on port 3000");
});
