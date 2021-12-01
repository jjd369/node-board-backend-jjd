import multer from 'multer'
import path from 'path'
import multerS3 from 'multer-s3'
import AWS from 'aws-sdk'

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2'
})

let storage = multerS3({
  s3: s3,
  bucket: 'board-file-upload-jjd',
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
