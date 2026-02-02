const express = require("express");
const router = express.Router();

// Controllers
const {
  register,
  login,
  profile
} = require("../controllers/authController");

// Middleware
const authMiddleware = require("../middleware/authMiddleware");


// ================= ROUTES =================

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Profile (Protected Route)
router.get("/profile", authMiddleware, profile);


// Test Route (Optional but Helpful)
router.get("/", (req, res) => {
  res.send("Auth Routes Working 🚀");
});


// ===========================================

module.exports = router;
