// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const db = require('./config/db');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // 🔧 Create USER_REGISTRATION table if not exists
// const createUserTable = `
// CREATE TABLE IF NOT EXISTS USER_REGISTRATION (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     firstName VARCHAR(50),
//     lastName VARCHAR(50),
//     email VARCHAR(100),
//     mobile VARCHAR(10) UNIQUE,
//     password VARCHAR(100)
// )
// `;

// db.query(createUserTable, (err, result) => {
//     if (err) {
//         console.error('Error creating USER_REGISTRATION table:', err);
//     } else {
//         console.log('USER_REGISTRATION table ready');
//     }
// });

// // ✅ Routes
// const authRoutes = require('./routes/LoginRoutes');
// app.use('/api', authRoutes);

// // 🌐 Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });







// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const defectRoutes = require('./routes/DefectRoutes');
// const db = require('./config/db');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Ensure the defects table exists
// const createDefectsTable = `
//   CREATE TABLE IF NOT EXISTS defects (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     partName VARCHAR(255),
//     operatorName VARCHAR(255),
//     mobileNo1 VARCHAR(10),
//     jobDefectDate DATE,
//     supervisorName VARCHAR(255),
//     mobileNo2 VARCHAR(10),
//     totalQuantity INT,
//     reasonDefect TEXT
//   )
// `;

// db.query(createDefectsTable, (err, result) => {
//   if (err) {
//     console.error("Error creating 'defects' table:", err);
//   } else {
//     console.log("'defects' table is ready");
//   }
// });

// // Routes
// app.use('/api', defectRoutes);

// // Server start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
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
//   console.log(`Server running on port ${PORT}`);
// });






// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const db = require('./config/db');  // Import the database connection

// dotenv.config();

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




// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const materialVendorRoutes = require('./routes/materialVendorRoutes');
// const db = require('./config/db');

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json()); // Body parser for JSON requests

// // Table creation query
// const createTableQuery = `
//  CREATE TABLE IF NOT EXISTS LEAVE_APPROVAL_DETAILS (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   partName VARCHAR(255) NOT NULL,
//   operatorName VARCHAR(255) NOT NULL,
//   mobileNo1 VARCHAR(10) NOT NULL,
//   jobDefectDate DATE NOT NULL,
//   supervisorName VARCHAR(255) NOT NULL,
//   mobileNo2 VARCHAR(10) NOT NULL,
//   totalQuantity INT NOT NULL,
//   reasonDefect TEXT NOT NULL,
//   isApproved BOOLEAN DEFAULT FALSE  -- New column to track approval
// );
// `;

// // Create table if it doesn't exist
// db.query(createTableQuery, (err, result) => {
//   if (err) {
//     console.error("Error creating table:", err);
//     return;
//   }
//   console.log("LEAVE_APPROVAL_DETAILS table is ready!");
// });

// // 📥 GET All Leaves
// app.get("/api/leaves", (req, res) => {
//   db.query("SELECT * FROM LEAVE_APPROVAL_DETAILS", (err, results) => {
//     if (err) {
//       console.error("Error fetching data:", err);
//       return res.status(500).json({ error: "Failed to fetch leaves" });
//     }
//     res.json(results);
//   });
// });

// // ✅ PUT Toggle Approval
// app.put("/api/leaves/:id", (req, res) => {
//   const { id } = req.params;
//   const { approved } = req.body;
//   db.query("UPDATE LEAVE_APPROVAL_DETAILS SET approved = ? WHERE id = ?", [approved, id], (err, result) => {
//     if (err) {
//       console.error("Error updating approval:", err);
//       return res.status(500).json({ error: "Failed to update approval" });
//     }
//     res.json({ message: "Leave approval updated", id, approved });
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.use(cors());
// app.use(express.json());

// app.use('/api/material-vendor', materialVendorRoutes);

// // Create table if not exists
// const createTableQuery = `
// CREATE TABLE IF NOT EXISTS material_vendor (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   materialName VARCHAR(255),
//   amountType VARCHAR(50),
//   materialWeight FLOAT,
//   amount FLOAT,
//   dateReceived DATE,
//   materialWeight2 FLOAT,
//   vendorName VARCHAR(255),
//   address TEXT,
//   gstNo VARCHAR(20),
//   vehicleNo VARCHAR(50),
//   driverName VARCHAR(255),
//   remark TEXT
// )`;

// db.query(createTableQuery, (err) => {
//   if (err) console.error("Error creating table:", err);
//   else console.log("Material Vendor table ready.");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const db = require('./config/db');

// // Routes
// const LoginRoutes = require('./routes/LoginRoutes');
// const defectRoutes = require('./routes/DefectRoutes');
// const partInfoRoutes = require('./routes/partsInfoRoutes');
// const materialVendorRoutes = require('./routes/materialVendorRoutes');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// // ✅ Route Middleware
// app.use('/api/login', LoginRoutes);                 // For login/register
// app.use('/api/defects', defectRoutes);             // For defects page
// app.use('/api/parts', partInfoRoutes);             // For parts information page
// app.use('/api/material-vendor', materialVendorRoutes); // For material vendor page

// // ✅ Table creation queries at startup

// // 1. USER_REGISTRATION table
// const createUserTable = `
// CREATE TABLE IF NOT EXISTS USER_REGISTRATION (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     firstName VARCHAR(50),
//     lastName VARCHAR(50),
//     email VARCHAR(100),
//     mobile VARCHAR(10) UNIQUE,
//     password VARCHAR(100)
// )`;
// db.query(createUserTable, (err) => {
//     if (err) console.error('Error creating USER_REGISTRATION table:', err);
//     else console.log('USER_REGISTRATION table ready.');
// });

// // 2. Defects table
// const createDefectsTable = `
// CREATE TABLE IF NOT EXISTS defects (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     partName VARCHAR(255),
//     operatorName VARCHAR(255),
//     mobileNo1 VARCHAR(10),
//     jobDefectDate DATE,
//     supervisorName VARCHAR(255),
//     mobileNo2 VARCHAR(10),
//     totalQuantity INT,
//     reasonDefect TEXT
// )`;
// db.query(createDefectsTable, (err) => {
//     if (err) console.error("Error creating defects table:", err);
//     else console.log("'defects' table ready.");
// });

// // 3. ADD_PARTS_INFORMATION table
// const createPartsInfoTable = `
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
// db.query(createPartsInfoTable, (err) => {
//     if (err) console.error("Error creating ADD_PARTS_INFORMATION table:", err);
//     else console.log("'ADD_PARTS_INFORMATION' table ready.");
// });

// // 4. Material Vendor table
// const createMaterialVendorTable = `
// CREATE TABLE IF NOT EXISTS material_vendor (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   materialName VARCHAR(255),
//   amountType VARCHAR(50),
//   materialWeight FLOAT,
//   amount FLOAT,
//   dateReceived DATE,
//   materialWeight2 FLOAT,
//   vendorName VARCHAR(255),
//   address TEXT,
//   gstNo VARCHAR(20),
//   vehicleNo VARCHAR(50),
//   driverName VARCHAR(255),
//   remark TEXT
// )`;
// db.query(createMaterialVendorTable, (err) => {
//     if (err) console.error("Error creating material_vendor table:", err);
//     else console.log("'material_vendor' table ready.");
// });

// // 5. LEAVE_APPROVAL_DETAILS table
// const createLeaveApprovalTable = `
// CREATE TABLE IF NOT EXISTS LEAVE_APPROVAL_DETAILS (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   partName VARCHAR(255) NOT NULL,
//   operatorName VARCHAR(255) NOT NULL,
//   mobileNo1 VARCHAR(10) NOT NULL,
//   jobDefectDate DATE NOT NULL,
//   supervisorName VARCHAR(255) NOT NULL,
//   mobileNo2 VARCHAR(10) NOT NULL,
//   totalQuantity INT NOT NULL,
//   reasonDefect TEXT NOT NULL,
//   isApproved BOOLEAN DEFAULT FALSE
// )`;
// db.query(createLeaveApprovalTable, (err) => {
//     if (err) console.error("Error creating LEAVE_APPROVAL_DETAILS table:", err);
//     else console.log("'LEAVE_APPROVAL_DETAILS' table ready.");
// });

// // ✅ Leave Approval routes

// // 📥 Get all leave requests
// app.get("/api/leaves", (req, res) => {
//     db.query("SELECT * FROM LEAVE_APPROVAL_DETAILS", (err, results) => {
//         if (err) {
//             console.error("Error fetching leave approvals:", err);
//             return res.status(500).json({ error: "Failed to fetch leaves" });
//         }
//         res.json(results);
//     });
// });

// // ✅ Update approval status
// app.put("/api/leaves/:id", (req, res) => {
//     const { id } = req.params;
//     const { approved } = req.body;
//     db.query(
//         "UPDATE LEAVE_APPROVAL_DETAILS SET isApproved = ? WHERE id = ?",
//         [approved, id],
//         (err, result) => {
//             if (err) {
//                 console.error("Error updating leave approval:", err);
//                 return res.status(500).json({ error: "Failed to update approval" });
//             }
//             res.json({ message: "Leave approval updated successfully", id, approved });
//         }
//     );
// });

// // 🌐 Start server
// app.listen(PORT, () => {
//     console.log(`✅ Server running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');

// Route imports
const authRoutes = require('./routes/LoginRoutes'); // register + login
const defectRoutes = require('./routes/DefectRoutes'); 
const partInfoRoutes = require('./routes/partsInfoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ✅ API Routes
app.use('/api', authRoutes);       // handles /register and /login
app.use('/api', defectRoutes);
app.use('/api/parts', partInfoRoutes);  // handles /parts

// ✅ Create all tables if not exists
const createUserTable = `
CREATE TABLE IF NOT EXISTS USER_REGISTRATION (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100),
    mobile VARCHAR(10) UNIQUE,
    password VARCHAR(100)
)`;

const createDefectsTable = `
CREATE TABLE IF NOT EXISTS defects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partName VARCHAR(255),
    operatorName VARCHAR(255),
    mobileNo1 VARCHAR(10),
    jobDefectDate DATE,
    supervisorName VARCHAR(255),
    mobileNo2 VARCHAR(10),
    totalQuantity INT,
    reasonDefect TEXT
)`;

const createPartsTable = `
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

// ✅ Create tables
db.query(createUserTable, (err) => {
    if (err) console.error('Error creating USER_REGISTRATION table:', err);
    else console.log('USER_REGISTRATION table ready.');
});

db.query(createDefectsTable, (err) => {
    if (err) console.error('Error creating defects table:', err);
    else console.log('defects table ready.');
});

db.query(createPartsTable, (err) => {
    if (err) console.error('Error creating ADD_PARTS_INFORMATION table:', err);
    else console.log('ADD_PARTS_INFORMATION table ready.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
