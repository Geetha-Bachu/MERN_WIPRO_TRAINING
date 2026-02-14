const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Course = sequelize.define("Course", {
  title: DataTypes.STRING,
  price: DataTypes.INTEGER   // Needed for revenue
});

module.exports = Course;
