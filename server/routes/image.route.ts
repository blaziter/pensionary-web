import express from 'express';
import { upload, uploadFile } from '../controllers/image.controller';

const router = express.Router();

const storage = diskStorage({
  destination(req, file, callback) {
    callback(null, 'public');
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10, files: 1 },
  fileFilter: (req, file, cb) => {
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/gif'
      ? cb(null, true)
      : cb(null, false);
  },
});

//GET
router.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.status(200)
    ? res.status(200).send('File uploaded successfully')
    : res.status(400).send('Something went wrong');
});

export default router;
