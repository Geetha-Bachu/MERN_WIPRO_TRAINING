const sequelize = require("../db/connection");

const Student = require("./Student");
const Course = require("./Course");
const Enrollment = require("./Enrollment");

// // Many-to-Many
// Student.belongsToMany(Course, { through: Enrollment });
// Course.belongsToMany(Student, { through: Enrollment });


module.exports = {
  sequelize,
  Student,
  Course,
  Enrollment
};
