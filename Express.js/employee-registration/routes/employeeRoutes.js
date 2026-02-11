const express = require("express");
const controller = require("../controllers/employeeController");

const router = express.Router();

router.post("/register", controller.registerEmployee);

module.exports = router;
