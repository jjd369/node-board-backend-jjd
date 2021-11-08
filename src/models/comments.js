import mongoose from 'mongoose'

const comments = mongoose.Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Boards', required: true },
  createdAt: { type: Date, default: Date.now }, // default 항목으로 현재시간
  updatedAt: { type: Date },
}, { versionKey: false })

export default mongoose.model('Comments', comments)