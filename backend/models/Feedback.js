const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  user: String,
  message: String,
  time: String,
});

module.exports = mongoose.model("Feedback", feedbackSchema);
