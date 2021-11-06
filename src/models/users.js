import mongoose from 'mongoose'

const users = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '이름을 입력해주세요.'],
    index: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
    match: /[\w\-\._]+@[\w\-\._]+\.\w{2,10}/
  },
  password: String
}, { versionKey: false })

export default mongoose.model('Users', users)