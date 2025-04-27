const db = require('../config/db'); // Make sure correct db import

const addDefect = (defectData, callback) => {
  const {
    partName,
    operatorName,
    mobileNo1,
    jobDefectDate,
    supervisorName,
    mobileNo2,
    totalQuantity,
    reasonDefect,
  } = defectData;

  const sql = `
    INSERT INTO defects (partName, operatorName, mobileNo1, jobDefectDate, supervisorName, mobileNo2, totalQuantity, reasonDefect)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [partName, operatorName, mobileNo1, jobDefectDate, supervisorName, mobileNo2, totalQuantity, reasonDefect],
    (err, result) => {
      if (err) {
        console.error("Error inserting defect into DB:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};

module.exports = { addDefect };
