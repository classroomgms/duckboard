const express = require("express");
const Activity = require("../models/Activity");
const router = express.Router();

router.post("/activity", async (req, res) => {
  const activity = new Activity(req.body);
  await activity.save();
  res.json({ message: "Activity logged" });
});

router.get("/activity", async (req, res) => {
  const log = await Activity.find();
  res.json(log);
});

module.exports = router;
