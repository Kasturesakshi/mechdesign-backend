const DefectModel = require('../models/DefectModel');

const submitDefect = (req, res) => {
  const defectData = req.body;

  DefectModel.addDefect(defectData, (err, result) => {
    if (err) {
      console.error("Error inserting defect:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Defect added successfully" });
  });
};

module.exports = { submitDefect };
