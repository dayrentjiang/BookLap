// router/protected.route.js
const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/auth");

// Apply auth middleware to all routes in this router
router.use(requireAuth);

// Protected routes
router.get("/profile", (req, res) => {
  res.json({
    userId: req.auth.userId,
    message: "Your profile data"
  });
});

router.post("/bookings", (req, res) => {
  // Create booking with authenticated user ID
  const booking = {
    userId: req.auth.userId,
    ...req.body
  };

  // Here you would save the booking to your database

  res.json({
    message: "Booking created successfully",
    booking
  });
});

module.exports = router;
