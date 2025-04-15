const { getAllLeaves, updateLeaveApproval } = require("../models/LeaveModel");

const fetchLeaves = (req, res) => {
  getAllLeaves((err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch leaves" });
    res.json(results);
  });
};

const changeApproval = (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;
  updateLeaveApproval(id, approved, (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to update approval" });
    res.json({ message: "Approval status updated" });
  });
};

module.exports = {
  fetchLeaves,
  changeApproval
};
