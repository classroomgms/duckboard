const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const feedbackRoutes = require("./routes/feedback");
const suggestionRoutes = require("./routes/suggestions");
const activityRoutes = require("./routes/activity");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/classroomgms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", feedbackRoutes);
app.use("/api", suggestionRoutes);
app.use("/api", activityRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
