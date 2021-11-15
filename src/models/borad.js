import mongoose from 'mongoose'

const board = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
    match: /[\w\-\._]+@[\w\-\._]+\.\w{2,10}/
  },
  name: String,
  title: {
    type: String,
    required: [true, '글 제목을 입력해주세요!']
  },
  content: {
    type: String,
    required: [true, '글 내용을 입력해주세요!']
  },
  attachment: { tpye: mongoose.Schema.Types.ObjectId, ref: 'Files' },
  createdAt: { type: Date, default: Date.now }, // default 항목으로 현재시간
  updatedAt: { type: Date },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
}, { versionKey: false })

export default mongoose.model('Boards', board)