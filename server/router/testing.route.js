const express = require("express");
require("dotenv").config();
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Test route" });
});

module.exports = router;
