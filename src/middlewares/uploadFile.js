import multer from 'multer'
import path from 'path'
import multerS3 from 'multer-s3'
import { s3 } from '../config/awsS3Client'
require('dotenv').config()

let storage = multerS3({
  s3: s3,
  bucket: process.env.S3_BUCKET,
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  key: (req, file, cb) => {
    if (file.fieldname === "attachment") {
      return cb(null, `attachment/${req.userInfo.email}_${Date.now().toString()}`)
    }
    cb(null, `userImages/${req.userInfo.email}`)
  }
})

export const upload = multer({
  dest: path.join(__dirname, '..', 'uploads/attachments')
})

export const uploadUserImage = multer({
  storage: storage,
  onError: (err, next) => {
    console.log('error', err)
    next(err)
  }
})
