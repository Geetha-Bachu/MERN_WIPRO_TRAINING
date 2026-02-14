// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const users = require("../models/User");
const isAuthenticated = require("../middlewares/authMiddleware");

// LOGIN PAGE
router.get("/login",(req,res)=>{
   res.render("login",{error:null});
});


// LOGIN POST
router.post("/login",(req,res)=>{

   const {username,password} = req.body;

   const user = users.find(u => 
      u.username === username && u.password === password
   );

   if(!user){
      return res.render("login",{error:"Invalid Credentials"});
   }

   // create session
   req.session.user = {
      username:user.username,
      role:user.role
   };

   res.redirect("/dashboard");
});


// DASHBOARD
router.get("/dashboard",isAuthenticated,(req,res)=>{
   res.send(`Welcome ${req.session.user.username}`);
});

module.exports = router;
