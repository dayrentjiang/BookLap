// middleware/auth.js

// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
  if (!req.auth?.userId) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};

module.exports = { requireAuth };
