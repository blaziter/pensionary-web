import express from 'express';
const router = express.Router();
const employee = require('../controllers/employee.controller');

router.get('/', employee.getEmployees);
router.get('/:employeeId', employee.getEmployee);

module.exports = router;