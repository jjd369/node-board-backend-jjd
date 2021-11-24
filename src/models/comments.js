import mongoose from 'mongoose'

const comments = mongoose.Schema({
  content: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Boards' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
}, { versionKey: false })

export default mongoose.model('Comments', comments)