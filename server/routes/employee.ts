const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee');

router.get('/employees', employee.getEmployees);
router.get('/employee/:employeeId', employee.getEmployee);

module.exports = router;