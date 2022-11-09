import express from 'express'
import { adminLogin, validateUser } from '../controllers/auth.controller'

const router = express.Router()

router.post('/login', adminLogin)
router.get('validate', validateUser)

export default router