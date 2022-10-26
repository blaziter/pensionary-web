const express = require('express');
const router = express.Router();
const employees = require('../controllers/employees');

router.get('/employees', employees.getEmployees);

module.exports = router;