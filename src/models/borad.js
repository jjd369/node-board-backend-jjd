import mongoose from 'mongoose'

const board = mongoose.Schema({
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  title: {
    type: String,
    required: [true, '글 제목을 입력해주세요!']
  },
  content: {
    type: String,
    required: [true, '글 내용을 입력해주세요!']
  },
  attachment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Files' }],
  createdAt: { type: Date, default: Math.floor(Date.now() / 1000) },
  updatedAt: { type: Date },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
}, { versionKey: false })

export default mongoose.model('Boards', board)