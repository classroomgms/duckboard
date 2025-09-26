const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  banned: { type: Boolean, default: false },
  created: String,
  bannedAt: String,
});

module.exports = mongoose.model("User", userSchema);
