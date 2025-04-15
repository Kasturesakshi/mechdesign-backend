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







const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const defectRoutes = require('./routes/DefectRoutes');
const db = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ensure the defects table exists
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
  )
`;

db.query(createDefectsTable, (err, result) => {
  if (err) {
    console.error("Error creating 'defects' table:", err);
  } else {
    console.log("'defects' table is ready");
  }
});

// Routes
app.use('/api', defectRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
