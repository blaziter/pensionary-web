import express from 'express';

const router = express.Router();

router.get('/all');
router.get('/user/:userId');
router.post('/new');
router.put('/:userId/update');
router.delete('/:userId/delete');

export default router;