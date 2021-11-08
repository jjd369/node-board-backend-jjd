import mongoose from 'mongoose'

const board = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  title: {
    type: String,
    required: [true, '글 제목을 입력해주세요!']
  },
  content: {
    type: String,
    required: [true, '글 내용을 입력해주세요!']
  },
  createdAt: { type: Date, default: Date.now }, // default 항목으로 현재시간
  updatedAt: { type: Date },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
}, { versionKey: false })

export default mongoose.model('Boards', board)