// src/contacts/career-mixed-upload.config.ts
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

function ensureDir(dir: string) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}
function randName(original: string) {
  const ext = extname(original);
  const rand = Array(16)
    .fill(null)
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
  return `${Date.now()}-${rand}${ext}`;
}

const IMG_RX = /^image\/(jpeg|png|jpg|gif|webp|svg\+xml)$/;

export const careerMixedUploadOptions = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      const isPdf =
        file.mimetype === 'application/pdf' ||
        file.originalname?.toLowerCase().endsWith('.pdf');
      const isImg = IMG_RX.test(file.mimetype);

      // route by field name + type
      if (file.fieldname === 'file' && isPdf) {
        const dir = join(process.cwd(), 'uploads', 'careers');
        ensureDir(dir);
        return cb(null, dir);
      }
      if (file.fieldname === 'personal_photo' && isImg) {
        const dir = join(process.cwd(), 'uploads', 'photos');
        ensureDir(dir);
        return cb(null, dir);
      }

      return cb(new Error('Unsupported file/field combination'), null as any);
    },
    filename: (_req, file, cb) => cb(null, randName(file.originalname)),
  }),
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'file') {
      if (
        file.mimetype === 'application/pdf' ||
        file.originalname?.toLowerCase().endsWith('.pdf')
      ) {
        return cb(null, true);
      }
      return cb(new Error('Career file must be a PDF'), false);
    }
    if (file.fieldname === 'personal_photo') {
      if (IMG_RX.test(file.mimetype)) return cb(null, true);
      return cb(new Error('Personal photo must be an image'), false);
    }
    return cb(new Error('Unknown upload field'), false);
  },
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB max
  },
};
