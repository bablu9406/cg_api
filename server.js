require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // ✅ app पहले declare

// middleware
app.use(cors());
app.use(express.json());

// test route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("CG API is running 🚀");
});

// routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// db + server start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log("Server running on port " + PORT)
    );
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
