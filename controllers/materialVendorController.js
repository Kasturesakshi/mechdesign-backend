const { insertMaterialVendor } = require('../models/materialVendorModel');

const submitMaterialVendorForm = (req, res) => {
  const formData = req.body;

  insertMaterialVendor(formData, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(200).json({ message: 'Form submitted successfully' });
  });
};

module.exports = { submitMaterialVendorForm };
