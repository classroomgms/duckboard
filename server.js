const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import route files
const authRoutes = require("./backend/routes/auth");
const userRoutes = require("./routes/users");
const feedbackRoutes = require("./routes/feedback");
const suggestionRoutes = require("./routes/suggestions");
const activityRoutes = require("./routes/activity");

const app = express();

// CORS setup to allow frontend access
app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

app.use(express.json());

// Connect to MongoDB
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

// Optional: Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
