const express = require("express");
const Suggestion = require("../models/Suggestion");
const router = express.Router();

// POST /api/suggestion → submit a new suggestion
router.post("/suggestion", async (req, res) => {
  try {
    const suggestion = new Suggestion(req.body);
    await suggestion.save();
    res.json({ message: "Suggestion submitted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit suggestion" });
  }
});

// GET /api/suggestion → retrieve all suggestions
router.get("/suggestion", async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
});

module.exports = router;
