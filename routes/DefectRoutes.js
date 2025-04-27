const express = require('express');
const router = express.Router();
const { submitDefect } = require('../controllers/DefectController'); // Correct function

router.post('/add-defect', submitDefect); // Use submitDefect, not DefectController.addDefect

module.exports = router;
