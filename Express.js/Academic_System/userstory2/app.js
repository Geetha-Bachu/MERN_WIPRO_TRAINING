const express = require("express");
const session = require("express-session");

const adminRoutes = require("./routes/adminRoutes");
const instructorRoutes = require("./routes/instructorRoutes");

const data = require("./data/mockData");

const app = express();

// BODY PARSER 
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// SESSION middleware
app.use(session({
   secret:"secret-key",
   resave:false,
   saveUninitialized:true
}));


// SIMPLE LOGIN 

app.get("/login-admin",(req,res)=>{
   req.session.user = data.users[0];
   res.send("Logged in as ADMIN");
});

app.get("/login-instructor",(req,res)=>{
   req.session.user = data.users[1];
   res.send("Logged in as INSTRUCTOR");
});


// ROUTES

app.use("/admin", adminRoutes);
app.use("/instructor", instructorRoutes);


app.listen(3000,()=>{
   console.log("server running on port 3000");
});
