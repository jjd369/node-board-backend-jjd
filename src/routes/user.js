import { Router } from 'express'
import usersModel from '@/models/users'
import wrapAsync from '@/logs/errorHandler'
import { authenticateToken } from '@/middlewares/isAuth'
import { uploadUserImage } from '@/middlewares/uploadFile'

const routes = Router()

routes.get('/me', authenticateToken, wrapAsync(async (req, res) => {
  // 유저 이름 리턴
  const name = req.userInfo.name
  const email = req.userInfo.email
  res.json({ name, email }).status(200)
}))

routes.get('/users', wrapAsync(async (req, res) => {
  const userRecord = await usersModel.find({})
  res.json({ result: userRecord })
}))

routes.patch('/update', authenticateToken, uploadUserImage.single('attachment'), wrapAsync(async (req, res) => {
  await usersModel.findOneAndUpdate({ _id: req.userInfo._id }, { ...req.body, image: req.file.filename })
  res.json({ message: '수정완료' })
}))

export default routes