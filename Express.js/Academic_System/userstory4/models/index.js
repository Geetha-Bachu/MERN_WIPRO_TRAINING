const sequelize = require("../db/connection");

const Student = require("./Student");
const Profile = require("./Profile");
const Course = require("./Course");
const Enrollment = require("./Enrollment");


// One-to-One
Student.hasOne(Profile,{foreignKey:"studentId"});
Profile.belongsTo(Student,{foreignKey:"studentId"});

// Many-to-Many
Student.belongsToMany(Course,{through:Enrollment});
Course.belongsToMany(Student,{through:Enrollment});

module.exports = {
  sequelize,
  Student,
  Profile,
  Course,
  Enrollment
};
