// router/testing.route.js
const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/auth");

// Public route - no auth needed
router.get("/public", (req, res) => {
  res.json({ message: "Public data" });
});

// Mixed public/private routes example
router.get("/venues", (req, res) => {
  // Public venue listing
  res.json({ message: "Public venues data" });
});

// Individual protected route example
router.get("/venues/my-favorites", requireAuth, (req, res) => {
  // Get user's favorite venues
  res.json({
    message: "Your favorite venues",
    userId: req.auth.userId
  });
});

module.exports = router;
