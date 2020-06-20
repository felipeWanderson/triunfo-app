import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export const tmpFolder = resolve(__dirname, '..', '..', 'tmp', 'uploads');

export const multerConfig = {
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
