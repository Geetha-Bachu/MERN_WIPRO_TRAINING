const express = require("express");
const router = express.Router();

const { sequelize, Student, Profile, Course } = require("../models");

// Create Student + Profile

router.post("/profile", async (req, res) => {

  const t = await sequelize.transaction();

  try {

    const { name, bio } = req.body;

    // Validation check
    if (!name || !bio) {
      throw new Error("Name and Bio are required");
    }

    // Create Student inside transaction
    const student = await Student.create(
      { name },
      { transaction: t }
    );

    // Create Profile inside transaction
    await Profile.create(
      {
        bio,
        studentId: student.id
      },
      { transaction: t }
    );

    // Commit if everything successful
    await t.commit();

    res.status(200).json({
      message: "Student and Profile created successfully",
      studentId: student.id
    });

  } catch (error) {

    // Rollback if anything fails
    await t.rollback();

    res.status(500).json({
      message: "Transaction failed - rollback executed",
      error: error.message
    });
  }

});



// Enroll Student into Course

router.post("/enroll", async (req, res) => {

  const t = await sequelize.transaction();

  try {

    const { studentId, courseId } = req.body;

    if (!studentId || !courseId) {
      throw new Error("StudentId and CourseId required");
    }

    const student = await Student.findByPk(studentId);
    const course = await Course.findByPk(courseId);

    if (!student || !course) {
      throw new Error("Invalid Student or Course");
    }

    await student.addCourse(course, { transaction: t });

    await t.commit();

    res.status(200).json({
      message: "Enrollment successful"
    });

  } catch (error) {

    await t.rollback();

    res.status(500).json({
      message: "Enrollment failed - rollback executed",
      error: error.message
    });
  }

});

module.exports = router;
