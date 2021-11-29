import { Router } from 'express'
import wrapAsync from '../logs/errorHandler'
import commentsModel from '../models/comments'
import boardsModel from '../models/borad'
import { authenticateToken } from '../middlewares/isAuth'

const routes = Router()

routes.post('/writeToBoard', authenticateToken, wrapAsync(async (req, res) => {
  // db에 comment 추가 
  const comment = await commentsModel.create({ uploadedBy: req.userInfo._id, ...req.body })
  // board에 comment id 추가
  await boardsModel.findOneAndUpdate({ _id: comment.board }, { $push: { comments: comment._id } })

  res.json({ comment }).status(200)
}))

routes.post('/writeToComment', authenticateToken, wrapAsync(async (req, res) => {
  // db에 comment 추가 
  const comment = await commentsModel.create({ uploadedBy: req.userInfo._id, content: req.body.content, })
  // comments에 comment id 추가
  await commentsModel.findOneAndUpdate({ _id: req.body.comments }, { $push: { comments: comment._id } })

  res.json({ comment }).status(200)
}))


routes.patch('/update', authenticateToken, wrapAsync(async (req, res) => {
  // db에 업데이트 
  await commentsModel.updateOne({ _id: req.body._id }, { updatedAt: Date.now(), ...req.body },)
  res.json({ message: 'update' }).status(200)
}))

routes.get('/comments', authenticateToken, wrapAsync(async (req, res) => {
  // db 조회
  const result = await commentsModel.find({})
  res.json({ result })
}))

routes.delete('/delete', authenticateToken, wrapAsync(async (req, res) => {
  // db에서 삭제
  await commentsModel.deleteOne({ _id: req.body._id })
  res.json({ message: '삭제 되었습니다.' }).status(200)
}))

export default routes