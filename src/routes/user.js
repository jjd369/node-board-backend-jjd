import { Router } from 'express'
import usersModel from '../models/users'
import wrapAsync from '../logs/errorHandler'
import { authenticateToken } from '../middlewares/isAuth'
import { uploadUserImage } from '../middlewares/uploadFile'

const routes = Router()

routes.get('/me', authenticateToken, wrapAsync(async (req, res) => {
  const userRecord = await usersModel.findOne({ _id: req.userInfo._id }, 'name email image createdAt')
  res.json(userRecord).status(200)
}))

routes.get('/users', wrapAsync(async (req, res) => {
  const userRecord = await usersModel.find({})
  res.json({ result: userRecord })
}))

routes.post('/update', authenticateToken, uploadUserImage.single('userImage'), wrapAsync(async (req, res) => {
  if (!req.file) {
    await usersModel.findOneAndUpdate({ _id: req.userInfo._id }, { ...req.body })
    return res.json({ message: '수정완료', ...data })
  }

  await usersModel.findOneAndUpdate({ _id: req.userInfo._id }, { ...req.body, image: req.file.location })
  res.json({ message: '수정완료' })
}))

export default routes