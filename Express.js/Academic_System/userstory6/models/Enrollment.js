const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Enrollment = sequelize.define("Enrollment", {});

module.exports = Enrollment;
