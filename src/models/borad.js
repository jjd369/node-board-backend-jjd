import mongoose from 'mongoose'

const board = mongoose.Schema({
  name: {
    type: String,
    required: [true, '이름을 입력해주세요.'],
    index: true
  },
  title: String,
  content: String
}, { versionKey: false })

export default mongoose.model('Board', board)