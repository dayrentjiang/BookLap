const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/database");
const PORT = 8000;

//app router
const testingRouter = require("./router/testing.route");

// Connect to MongoDB
connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

//router middleware
app.use("/", testingRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
