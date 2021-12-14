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
  attachment: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Files' }],
    validate: {
      validator: function () {
        return !(this.attachment.length > 3)
      },
      message: () => `첨부파일은 최대 3개까지 가능합니다`
    },
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
  view: { type: Number, default: 0 },
  isDeleted: { type: Boolean, default: false }
}, { versionKey: false })


const Boards = mongoose.model('Boards', board)

export default Boards