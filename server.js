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
});
