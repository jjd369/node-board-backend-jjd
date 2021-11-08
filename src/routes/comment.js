import { Router } from 'express'
import wrapAsync from '@/logs/errorHandler'
import commentsModel from '@/models/comments'
import boardsModel from '@/models/borad'
import { authenticateToken } from '@/middlewares/isAuth'

const routes = Router()

routes.post('/write', authenticateToken, wrapAsync(async (req, res) => {
  const comment = await commentsModel.create(req.body)
  await boardsModel.findOneAndUpdate({ _id: comment.board }, { $push: { comments: comment._id } })
  res.json({ comment }).status(200)
}))

routes.patch('/update', authenticateToken, wrapAsync(async (req, res) => {
  await commentsModel.updateOne({ _id: req.body._id }, { ...req.body },)
  res.json({ message: 'update' }).status(200)
}))

routes.get('/comments', authenticateToken, wrapAsync(async (req, res) => {
  const result = await commentsModel.find({})
  res.json({ result })
}))
export default routes