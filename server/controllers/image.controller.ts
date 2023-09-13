import { Response, Request, NextFunction } from 'express';
import multer, { diskStorage } from 'multer';

const storage = diskStorage({
  destination(req, file, callback) {
    callback(null, 'public');
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10, files: 1 },
  fileFilter: (req, file, cb) => {
    console.log(file.originalname);
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/gif'
      ? cb(null, true)
      : cb(null, false);
  },
});

export const uploadFile = (req: Request, res: Response) => {
  return res.status(200).send('File uploaded successfully');
};
