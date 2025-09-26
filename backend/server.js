const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import route files (make sure each exports a valid router)
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const feedbackRoutes = require("./routes/feedback");
const suggestionRoutes = require("./routes/suggestions");
const activityRoutes = require("./routes/activity");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (use environment variable for cloud deployment)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Mount API routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", feedbackRoutes);
app.use("/api", suggestionRoutes);
app.use("/api", activityRoutes);

// Serve frontend if using combined deployment
// app.use(express.static("public")); // Uncomment if frontend is in /public

// Start server on dynamic port (Render sets process.env.PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
