const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  user: String,
  action: String,
  time: String,
});

module.exports = mongoose.model("Activity", activitySchema);
