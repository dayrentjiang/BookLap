const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/database");
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");
const PORT = 8000;

//app router
const testingRouter = require("./router/testing.route");

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json()); // Add this to parse JSON request bodies

// Add Clerk middleware globally - this adds auth object to req
app.use(ClerkExpressWithAuth());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

//router middleware
app.use("/", testingRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
