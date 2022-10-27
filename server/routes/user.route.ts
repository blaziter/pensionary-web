import express from 'express';
const router = express.Router();
const user = require('../controllers/user.controller');

router.get('/login', user.getLogin);