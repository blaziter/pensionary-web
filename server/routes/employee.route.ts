import express from 'express';
import { deleteEmployee, getAllEmployees, newEmployee } from '../controllers/employee.controller';

const router = express.Router();

router.get('/all', getAllEmployees);
router.post('/new', newEmployee);
router.put('/:employeeId/edit', getAllEmployees);
router.delete('/:employeeId/delete', deleteEmployee);

export default router;