import mongoose from 'mongoose'

const files = mongoose.Schema({
  originalFileName: String,
  serverFileName: String,
  location: String,
  size: Number,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'board' },
  isDeleted: { type: Boolean, default: false }
}, { versionKey: false })

export default mongoose.model('Files', files)

