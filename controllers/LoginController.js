const userModel = require('../models/LoginModel');

exports.register = (req, res) => {
    const { firstName, lastName, email, mobile, password } = req.body;
    const user = { firstName, lastName, email, mobile, password };

    userModel.getUserByMobile(mobile, (err, results) => {
        if (results.length > 0) {
            return res.status(400).json({ message: 'Mobile already registered' });
        }

        userModel.registerUser(user, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error registering user' });
            res.status(200).json({ message: 'Registration successful' });
        });
    });
};

exports.login = (req, res) => {
    const { mobile, password } = req.body;

    userModel.getUserByMobile(mobile, (err, results) => {
        if (err || results.length === 0) return res.status(400).json({ message: 'User not found' });

        const user = results[0];
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    });
};

exports.forgotPassword = (req, res) => {
    const { mobile, newPassword } = req.body;

    userModel.getUserByMobile(mobile, (err, results) => {
        if (err || results.length === 0) return res.status(400).json({ message: 'User not found' });

        userModel.updatePassword(mobile, newPassword, (err) => {
            if (err) return res.status(500).json({ message: 'Failed to update password' });
            res.status(200).json({ message: 'Password updated successfully' });
        });
    });
};
