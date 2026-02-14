const express = require("express");
const router = express.Router();

const roleMiddleware = require("../middlewares/roleMiddleware");
const data = require("../data/mockData");


// Instructor view own courses
router.get("/my-courses", roleMiddleware("instructor"), (req,res)=>{

   const instructorId = req.session.user.id;

   const myCourses = data.courses.filter(
      c => c.instructorId === instructorId
   );

   res.json(myCourses);
});

module.exports = router;
