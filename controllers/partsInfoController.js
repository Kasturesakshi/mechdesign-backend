const { addPartInfo } = require("../models/partsInfoModel");

const submitPartInfo = (req, res) => {
  const formData = req.body;

  addPartInfo(formData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Part information added successfully" });
  });
};

module.exports = { submitPartInfo };
