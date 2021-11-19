import { Router } from 'express'
import wrapAsync from '@/logs/errorHandler'
import boardModel from '@/models/borad'
import { authenticateToken } from '@/middlewares/isAuth'
import { upload } from '@/middlewares/uploadFile'
import fileModel from '@/models/file'

const routes = Router()

routes.get('/boards', authenticateToken, wrapAsync(async (req, res) => {
  const boardRecord = await boardModel.find({})
    .populate('uploadedBy', ['email', 'name'])
    .populate('attachment')

  res.json(boardRecord).status(200)
}))

routes.get('/boards/:id', authenticateToken, wrapAsync(async (req, res) => {
  const boardRecord = await boardModel.findOne({ _id: req.params.id })
    .populate({ path: 'comments', populate: [{ path: 'comments', populate: { path: 'uploadedBy', select: ['name', 'email'] } }, { path: 'uploadedBy', select: ['name', 'email'] }] })
    .populate({ path: 'uploadedBy', select: ['name', 'email'] })
    .populate('attachment')


  res.json(boardRecord).status(200)
}))

routes.post('/write', authenticateToken, upload.single('attachment'), wrapAsync(async (req, res) => {
  if (req.file) {
    const file = await fileModel.create({ originalFileName: req.file.originalname, serverFileName: req.file.filename, uploadedBy: req.userInfo._id })
    const result = await boardModel.create({ uploadedBy: req.userInfo._id, ...req.body, attachment: file._id })
    return res.json({ message: '글 작성 완료', ...result }).status(200)
  }

  const result = await boardModel.create({ uploadedBy: req.userInfo._id, ...req.body })

  res.json({ message: '글 작성 완료', ...result }).status(200)
}))

routes.patch('/update', authenticateToken, wrapAsync(async (req, res) => {
  if (req.userInfo.email !== req.body.email) return res.json({ message: '권한이 없습니다.' })
  await boardModel.updateOne({ _id: req.body._id }, { updatedAt: Date.now(), ...req.body })
  res.json({ message: '글 수정 완료' })
}))

routes.delete('/delete', authenticateToken, wrapAsync(async (req, res) => {
  await boardModel.deleteOne({ _id: req.body.id })
  res.json({ message: '삭제 되었습니다.' }).status(200)
}))

export default routes