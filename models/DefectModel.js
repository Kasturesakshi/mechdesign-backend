const db = require('../config/db');

const addDefect = (data, callback) => {
  const sql = `
    INSERT INTO defects 
    (partName, operatorName, mobileNo1, jobDefectDate, supervisorName, mobileNo2, totalQuantity, reasonDefect) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.partName,
    data.operatorName,
    data.mobileNo1,
    data.jobDefectDate,
    data.supervisorName,
    data.mobileNo2,
    data.totalQuantity,
    data.reasonDefect,
  ];

  db.query(sql, values, callback);
};

module.exports = { addDefect };
