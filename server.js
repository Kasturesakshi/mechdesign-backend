const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const db = require("./config/db");
const partInfoRoutes = require("./routes/partsInfoRoutes");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route Middleware
app.use("/api/parts", partInfoRoutes);

// Create Table if not exists
const createTableQuery = `
CREATE TABLE IF NOT EXISTS ADD_PARTS_INFORMATION (
  id INT AUTO_INCREMENT PRIMARY KEY,
  machineNo VARCHAR(100),
  partName VARCHAR(100),
  operatorName VARCHAR(100),
  operatorMobile VARCHAR(15),
  shift VARCHAR(50),
  jobDate DATE,
  supervisorName VARCHAR(100),
  supervisorMobile VARCHAR(15),
  shiftJobQty VARCHAR(50),
  totalQty VARCHAR(50),
  remark TEXT,
  others TEXT
)`;

db.query(createTableQuery, (err) => {
  if (err) {
    console.error("Table creation error:", err);
  } else {
    console.log("Table 'ADD_PARTS_INFORMATION' created or already exists.");
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
