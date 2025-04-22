import fs from "fs";
import path from "path";
import fetch from "node-fetch";

let visitCount = 0;

// Function to increment visit count
function incrementVisitCount() {
  visitCount++;
  saveVisitStats();
}

// Function to fetch visitor IP
async function fetchVisitorIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return "Unknown IP";
  }
}

// Function to save visit statistics to a file
async function saveVisitStats() {
  const ip = await fetchVisitorIP();
  const stats = {
    visitCount,
    lastVisitorIP: ip,
    timestamp: new Date().toISOString(),
  };

  const filePath = path.join(__dirname, "visitStats.txt");
  fs.writeFile(filePath, JSON.stringify(stats, null, 2), (err) => {
    if (err) {
      console.error("Error saving visit stats:", err);
    } else {
      console.log("Visit stats saved successfully:", stats);
    }
  });
}

// Initialize visit statistics
function initVisitStats() {
  incrementVisitCount();
}

// Export the initialization function
export { initVisitStats };