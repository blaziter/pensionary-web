import express from 'express';
import { deleteEmployee, getAllEmployees, getEmployeeByRole, newEmployee, updateEmployee } from '../controllers/employee.controller';

const router = express.Router();

router.get('/all', getAllEmployees);
router.get('/:role', getEmployeeByRole)
router.post('/new', newEmployee);
router.put('/:employeeId/edit', updateEmployee);
router.delete('/:employeeId/delete', deleteEmployee);

export default router;