const express = require("express");
const router = express.Router();

const { Student, Course, Enrollment } = require("../models");

const PAGE_SIZE = 5;


// STUDENTS PAGINATION

router.get("/students", async (req, res) => {
  //reads the page number from url and if page not exits defaukt page is 1
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * PAGE_SIZE;

  const { count, rows } = await Student.findAndCountAll({
    limit: PAGE_SIZE,
    offset: offset
  });

  res.json({
    totalRecords: count,
    totalPages: Math.ceil(count / PAGE_SIZE),
    currentPage: page,
    data: rows
  });
});



// COURSES PAGINATION

router.get("/courses", async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * PAGE_SIZE;

  const { count, rows } = await Course.findAndCountAll({
    limit: PAGE_SIZE,
    offset: offset
  });

  res.json({
    totalRecords: count,
    totalPages: Math.ceil(count / PAGE_SIZE),
    currentPage: page,
    data: rows
  });
});


// ENROLLMENTS PAGINATION

router.get("/enrollments", async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * PAGE_SIZE;

  const { count, rows } = await Enrollment.findAndCountAll({
    limit: PAGE_SIZE,
    offset: offset
  });

  res.json({
    totalRecords: count,
    totalPages: Math.ceil(count / PAGE_SIZE),
    currentPage: page,
    data: rows
  });
});

module.exports = router;
