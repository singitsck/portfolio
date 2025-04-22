import express from "express";
import { initVisitStats } from "./js/visitStats.js";

const app = express();
const PORT = 3000;

// Serve static files (e.g., your portfolio)
app.use(express.static("portfolio"));

// Endpoint to trigger visit statistics
app.get("/track-visit", (req, res) => {
  initVisitStats();
  res.send("Visit statistics updated!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});