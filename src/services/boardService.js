import boardModel from '@/models/borad'

export async function getBoards() {
  const boardRecord = await boardModel.find({})
  return boardRecord
}

export async function getBoard(req) {
  const boardRecord = await boardModel.findOne({ _id: req.params.id }).populate({ path: 'comments', populate: { path: 'comments' } })
  return boardRecord
}

export async function writeBoard(req) {
  const result = await boardModel.create({ author: req.userInfo._id, ...req.body })
  return result
}

export async function updateBoard(req) {
  if (req.userInfo._id !== req.body.author) throw new Error('권한이 없습니다.')
  const result = await boardModel.updateOne({ _id: req.body._id }, { updatedAt: Date.now(), ...req.body })
  return result
}

export async function deleteBoard(req) {
  const result = await boardModel.deleteOne({ _id: req.body.id })
  return result
}