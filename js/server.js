import express from "express";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

// Serve static files (e.g., your portfolio)
app.use(express.static("portfolio"));

// Function to fetch visitor IP
async function fetchVisitorIP(req) {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return req.ip || "Unknown IP";
  }
}

// Function to save visit statistics to a file
async function saveVisitStats(req) {
  const ip = await fetchVisitorIP(req);
  const filePath = path.join(__dirname, "visitData.txt");

  // Read existing data
  let stats = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf-8");
    stats = JSON.parse(fileData);
  }

  // Add new visit data
  const newVisit = {
    ip,
    timestamp: new Date().toISOString(),
  };
  stats.push(newVisit);

  // Save updated data
  fs.writeFileSync(filePath, JSON.stringify(stats, null, 2));
}

// Endpoint to track visits
app.get("/track-visit", async (req, res) => {
  await saveVisitStats(req);
  res.send("Visit statistics updated!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});