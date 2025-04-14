const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected');
});

const mysql = require("mysql");
require("dotenv").config();

// Correctly destructure the environment variables
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Initial connection to create the database if it doesn't exist
const initialConnection = mysql.createConnection({
  host: DB_HOST,       // Use the DB_HOST from .env
  user: DB_USER,       // Use the DB_USER from .env
  password: DB_PASSWORD, // Use the DB_PASSWORD from .env
});

initialConnection.connect((err) => {
  if (err) {
    console.error("Initial DB connection failed:", err);
    return;
  }

  // Create the database if it doesn't exist
  initialConnection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``, (err) => {
    if (err) {
      console.error("Database creation failed:", err);
    } else {
      console.log(`Database '${DB_NAME}' ensured.`);
    }

    // Close initial connection
    initialConnection.end();
  });
});

// Create actual DB connection using the ensured database
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,  // Now using the correct DB_NAME from .env
});

// Export connection
module.exports = db;
