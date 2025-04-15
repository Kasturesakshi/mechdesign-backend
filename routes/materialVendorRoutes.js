
const express = require('express');
const router = express.Router();
const { submitMaterialVendorForm } = require('../controllers/materialVendorController');

router.post('/submit', submitMaterialVendorForm);

module.exports = router;
