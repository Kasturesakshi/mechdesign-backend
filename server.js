// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const app = express();
// const db = require("./config/db");
// const partInfoRoutes = require("./routes/partsInfoRoutes");

// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Route Middleware
// app.use("/api/parts", partInfoRoutes);

// // Create Table if not exists
// const createTableQuery = `
// CREATE TABLE IF NOT EXISTS ADD_PARTS_INFORMATION (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   machineNo VARCHAR(100),
//   partName VARCHAR(100),
//   operatorName VARCHAR(100),
//   operatorMobile VARCHAR(15),
//   shift VARCHAR(50),
//   jobDate DATE,
//   supervisorName VARCHAR(100),
//   supervisorMobile VARCHAR(15),
//   shiftJobQty VARCHAR(50),
//   totalQty VARCHAR(50),
//   remark TEXT,
//   others TEXT
// )`;

// db.query(createTableQuery, (err) => {
//   if (err) {
//     console.error("Table creation error:", err);
//   } else {
//     console.log("Table 'ADD_PARTS_INFORMATION' created or already exists.");
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const materialVendorRoutes = require('./routes/materialVendorRoutes');
const db = require('./config/db');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/material-vendor', materialVendorRoutes);

// Create table if not exists
const createTableQuery = `
CREATE TABLE IF NOT EXISTS material_vendor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  materialName VARCHAR(255),
  amountType VARCHAR(50),
  materialWeight FLOAT,
  amount FLOAT,
  dateReceived DATE,
  materialWeight2 FLOAT,
  vendorName VARCHAR(255),
  address TEXT,
  gstNo VARCHAR(20),
  vehicleNo VARCHAR(50),
  driverName VARCHAR(255),
  remark TEXT
)`;

db.query(createTableQuery, (err) => {
  if (err) console.error("Error creating table:", err);
  else console.log("Material Vendor table ready.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
