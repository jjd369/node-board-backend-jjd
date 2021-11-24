import multer from 'multer'
import path from 'path'

let storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '..', 'userImages/'))
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}__${file.originalname}`)
  },
})

export const upload = multer({
  dest: path.join(__dirname, '..', 'uploads/')
})

export const uploadUserImage = multer({ storage: storage })
