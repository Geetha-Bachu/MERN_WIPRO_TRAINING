const express = require("express");
const router = express.Router();

const roleMiddleware = require("../middlewares/roleMiddleware");
const data = require("../data/mockData");


// Admin: create instructor
router.post("/instructor", roleMiddleware("admin"), (req,res)=>{

   const { name } = req.body;

   if(!name){
      return res.send("Instructor name required");
   }

   data.instructors.push(name);

   res.send("Instructor Created");
});


// Admin: create course
router.post("/course", roleMiddleware("admin"), (req,res)=>{

   const { title, instructorId } = req.body;

   if(!title || !instructorId){
      return res.send("Missing data");
   }

   data.courses.push({
      id:data.courses.length+1,
      title,
      instructorId
   });

   res.send("Course Created");
});


// Admin: view reports
router.get("/reports", roleMiddleware("admin"), (req,res)=>{
   res.json(data);
});

module.exports = router;
