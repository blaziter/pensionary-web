import express from 'express';
import { createAnnouncement, deleteAnnouncement, editAnnouncement, getAllAnnouncements } from '../controllers/announcement.controller';

const router = express.Router();

router.get('/all', getAllAnnouncements);
router.post('/new', createAnnouncement);
router.put('/:announcementId', editAnnouncement);
router.delete('/:announcementId', deleteAnnouncement);

export default router;