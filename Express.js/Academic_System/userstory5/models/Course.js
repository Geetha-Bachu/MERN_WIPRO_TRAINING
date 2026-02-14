const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Course = sequelize.define("Course", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Course;
