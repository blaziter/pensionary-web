import express from 'express';
import { deleteUser, getAllUsers, getUserById, newUser, updateUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/all', getAllUsers);
router.get('/:userId', getUserById);
router.post('/new', newUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

export default router;