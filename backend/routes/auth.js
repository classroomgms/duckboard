const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ error: "User not found" });
  if (user.banned) return res.status(403).json({ error: "User is banned" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Incorrect password" });

  const token = jwt.sign({ id: user._id }, "secretkey");
  res.json({ token, username });
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ username });
  if (exists) return res.status(400).json({ error: "Username already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashed, created: new Date().toLocaleString() });
  await user.save();
  res.json({ message: "User created" });
});

module.exports = router;
