const express = require("express");
const router = express.Router();

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.get("/createuser", async (req, res) => {

  await User.deleteMany({});

  await User.create({
    username: "admin",
    password: await bcrypt.hash("123", 10),
    role: "admin"
  });

  await User.create({
    username: "user",
    password: await bcrypt.hash("123", 10),
    role: "user"
  });

  res.send("Users created");
});


router.post("/login", async (req, res) => {

  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) return res.status(401).send("Invalid login");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(401).send("Invalid login");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "jwt_secret_key",
    { expiresIn: "1h" }
  );

  res.json({ token });

});

module.exports = router;
