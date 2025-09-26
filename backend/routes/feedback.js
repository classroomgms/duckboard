const express = require("express");
const Feedback = require("../models/Feedback");
const router = express.Router();

router.post("/feedback", async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.json({ message: "Feedback submitted" });
});

router.get("/feedback", async (req, res) => {
  const feedback = await Feedback.find();
  res.json(feedback);
});

module.exports = router;
