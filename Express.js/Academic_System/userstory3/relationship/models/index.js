const sequelize = require("../db/connection");

const Student = require("./Student");
const Profile = require("./Profile");
const Instructor = require("./Instructor");
const Course = require("./Course");
const Enrollment = require("./Enrollment");


//  ONE TO ONE
Student.hasOne(Profile,{
  foreignKey:"studentId",
  onDelete:"CASCADE"
});

Profile.belongsTo(Student,{
  foreignKey:"studentId"
});


//  ONE TO MANY
Instructor.hasMany(Course,{
  foreignKey:"instructorId",
  onDelete:"CASCADE"
});

Course.belongsTo(Instructor,{
  foreignKey:"instructorId"
});


//  MANY TO MANY
Student.belongsToMany(Course,{
  through:Enrollment,
  foreignKey:"studentId"
});

Course.belongsToMany(Student,{
  through:Enrollment,
  foreignKey:"courseId"
});


module.exports = {
  sequelize,
  Student,
  Profile,
  Instructor,
  Course,
  Enrollment
};
