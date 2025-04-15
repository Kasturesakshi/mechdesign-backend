const db = require("../config/db");

const getAllLeaves = (callback) => {
  db.query("SELECT * FROM leave_requests", callback);
};

const updateLeaveApproval = (id, approved, callback) => {
  db.query("UPDATE leave_requests SET approved = ? WHERE id = ?", [approved, id], callback);
};

module.exports = {
  getAllLeaves,
  updateLeaveApproval
};
