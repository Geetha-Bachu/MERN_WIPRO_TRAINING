const express = require("express");
const controller = require("../controllers/orderController");
const validateOrder = require("../middleware/validateOrder");

const router = express.Router();

router.post("/place", validateOrder, controller.createOrder);//middleware called

module.exports = router;
