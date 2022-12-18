import express from 'express';
import { adminLogin, authorization, logout } from '../controllers/auth.controller';
import { authentication } from '../middleware/authorization.middleware';
import { isLoggedIn } from '../middleware/loggedIn.middleware';
import { isLoggedOut } from '../middleware/loggedOut.middleware';

const router = express.Router();

router.post('/login', adminLogin);
router.post('/logout', logout);
router.post('/verify', authorization);

export default router;