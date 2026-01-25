const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ FIXED PATH
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 5000;

// routes
app.use("/api/auth", authRoutes);

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
