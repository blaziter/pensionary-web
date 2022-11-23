import express from 'express';
import { adminLogin, authorization, logout } from '../controllers/auth.controller';
import { authentication } from '../middleware/authorization.middleware';

const router = express.Router();

router.post('/login', adminLogin);
router.post('/logout', authentication, logout);
router.post('/verify', authorization);

export default router;