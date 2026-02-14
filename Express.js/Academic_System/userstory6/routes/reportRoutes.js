const express = require("express");
const router = express.Router();
const { Student, Instructor, Course, Enrollment, sequelize } = require("../models");
const { fn, col, literal } = require("sequelize");


//  Total Students Per Course
