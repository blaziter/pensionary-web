import express from 'express';
import {
  deleteEmployee,
  getAllEmployees,
  getEmployeeByParams,
  newEmployee,
  updateEmployee,
} from '../controllers/employee.controller';

const router = express.Router();

//GET
router.get('/all', getAllEmployees);
router.get('/', getEmployeeByParams);

//POST
router.post('/new', newEmployee);

//PUT
router.put('/:employeeId', updateEmployee);

//DELETE
router.delete('/:employeeId', deleteEmployee);

export default router;
