const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.patch("/users/:id/ban", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, {
    banned: true,
    bannedAt: new Date().toLocaleString(),
  });
  res.json({ message: "User banned" });
});

router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;
