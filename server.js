const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔧 Create USER_REGISTRATION table if not exists
const createUserTable = `
CREATE TABLE IF NOT EXISTS USER_REGISTRATION (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100),
    mobile VARCHAR(10) UNIQUE,
    password VARCHAR(100)
)
`;

db.query(createUserTable, (err, result) => {
    if (err) {
        console.error('Error creating USER_REGISTRATION table:', err);
    } else {
        console.log('USER_REGISTRATION table ready');
    }
});

// ✅ Routes
const authRoutes = require('./routes/LoginRoutes');
app.use('/api', authRoutes);

// 🌐 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
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
