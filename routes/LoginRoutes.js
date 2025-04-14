const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');

router.post('/register', LoginController.register);
router.post('/login', LoginController.login);
router.post('/forgot-password', LoginController.forgotPassword);

module.exports = router;

 





