import express from 'express';
import { upload, uploadFile } from '../controllers/image.controller';

const router = express.Router();


//GET
router.post('/upload', upload.single('file'), uploadFile);

export default router;