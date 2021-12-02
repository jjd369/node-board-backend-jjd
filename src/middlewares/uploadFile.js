import multer from 'multer'
import path from 'path'
import multerS3 from 'multer-s3'
import { s3 } from '../config/awsS3Client'

let storage = multerS3({
  s3: s3,
  bucket: 'my-board-file-upload-jjd',
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  key: (req, file, cb) => {
    cb(null, `userImages/${Date.now().toString()}`)
  }
})

export const upload = multer({
  dest: path.join(__dirname, '..', 'uploads/attachments')
})

export const uploadUserImage = multer({ storage: storage })
