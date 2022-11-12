import express from 'express'
import { adminLogin, logout } from '../controllers/auth.controller'
import { authorization } from '../utils/authorization.utils'

const router = express.Router();

router.post('/login', adminLogin);
router.post('/logout', authorization, logout);

export default router;