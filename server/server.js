const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON data
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
