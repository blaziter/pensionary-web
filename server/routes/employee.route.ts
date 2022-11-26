import express from 'express';
import { deleteEmployee, getAllEmployees, getEmployeeByRole, getEmployeeByShift, getEmployeeByWorkplace, newEmployee, updateEmployee } from '../controllers/employee.controller';

const router = express.Router();

//GET
router.get('/all', getAllEmployees);
router.get('/:role', getEmployeeByRole);
router.get('/:shift', getEmployeeByShift);
router.get('/:workplace', getEmployeeByWorkplace);

//POST
router.post('/new', newEmployee);

//PUT
router.put('/:employeeId/edit', updateEmployee);

//DELETE
router.delete('/:employeeId/delete', deleteEmployee);

export default router;