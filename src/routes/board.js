import { Router } from 'express'
import wrapAsync from '@/logs/errorHandler'
import boardModel from '@/models/borad'

const routes = Router()

routes.get('/boards', wrapAsync(async (req, res) => {
  const boardRecord = await boardModel.find({})
  res.json(boardRecord).status(200)
}))

routes.get('/boards/:id', wrapAsync(async (req, res) => {
  const boardRecord = await boardModel.findOne({ _id: req.params.id })
  res.json(boardRecord).status(200)
}))

routes.post('/write', wrapAsync(async (req, res) => {
  await boardModel.create(req.body)
  res.json({ message: '글 작성 완료' }).status(200)
}))

routes.delete('/delete', wrapAsync(async (req, res) => {
  await boardModel.deleteOne({ _id: req.body.id })
}))

export default routes