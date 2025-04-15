const express = require('express');
const router = express.Router();
const { submitDefect } = require('../controllers/DefectController');

router.post('/add-defect', submitDefect);

module.exports = router;
