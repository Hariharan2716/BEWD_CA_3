const {login, dashboard} = require('../controllers/authController');
const express = require('express');
const router = express.Router();

router.post('/login', login);

router.get('/dashboard', dashboard);

module.exports = router;