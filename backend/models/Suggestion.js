const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
  user: String,
  message: String,
  time: String,
});

module.exports = mongoose.model("Suggestion", suggestionSchema);
