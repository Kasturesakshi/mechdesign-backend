const db = require("../config/db");

const addPartInfo = (data, callback) => {
  const sql = `
    INSERT INTO ADD_PARTS_INFORMATION 
    (machineNo, partName, operatorName, operatorMobile, shift, jobDate,
    supervisorName, supervisorMobile, shiftJobQty, totalQty, remark, others)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    data.machineNo, data.partName, data.operatorName, data.operatorMobile,
    data.shift, data.jobDate, data.supervisorName, data.supervisorMobile,
    data.shiftJobQty, data.totalQty, data.remark, data.others
  ];

  db.query(sql, values, callback);
};

module.exports = { addPartInfo };
