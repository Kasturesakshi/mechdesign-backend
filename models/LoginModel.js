const db = require('../config/db');

const registerUser = (data, callback) => {
    const sql = 'INSERT INTO USER_REGISTRATION SET ?';
    db.query(sql, data, callback);
};

const getUserByMobile = (mobile, callback) => {
    const sql = 'SELECT * FROM USER_REGISTRATION WHERE mobile = ?';
    db.query(sql, [mobile], callback);
};

const updatePassword = (mobile, password, callback) => {
    const sql = 'UPDATE USER_REGISTRATION SET password = ? WHERE mobile = ?';
    db.query(sql, [password, mobile], callback);
};

module.exports = {
    registerUser,
    getUserByMobile,
    updatePassword
};
