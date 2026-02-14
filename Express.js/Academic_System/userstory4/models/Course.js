const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Course = sequelize.define("Course",{
  title: DataTypes.STRING
});

module.exports = Course;
