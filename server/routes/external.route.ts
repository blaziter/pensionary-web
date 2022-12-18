import express from 'express';
import { getAllEmployees } from '../controllers/external.controller';

const router = express.Router();

router.get('/all', getAllEmployees);

export default router;