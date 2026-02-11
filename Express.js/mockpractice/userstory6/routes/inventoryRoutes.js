const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

router.get("/profile", auth, (req, res) => {
  res.json({
    message: "Profile accessed",
    user: req.user
  });
});

router.get("/admin", auth, authorize("admin"), (req, res) => {
  res.send("Welcome Admin");
});

router.get("/user", auth, authorize("user"), (req, res) => {
  res.send("Welcome User");
});

module.exports = router;
