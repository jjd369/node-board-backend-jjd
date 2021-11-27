import { Router } from 'express'
import { signIn, signUp, signOut, refreshToken } from '@/services/authService'
import { sendMail } from '@/services/mailservice'
import { uploadUserImage } from '@/middlewares/uploadFile'
import wrapAsync from '@/logs/errorHandler'

const routes = Router()

routes.post('/signIn', wrapAsync(async (req, res) => {
  const result = await signIn(req.body)
  res.status(200).json({ ...result })
}))

routes.post('/signUp', uploadUserImage.single('attachment'), wrapAsync(async (req, res) => {

  const { name, email } = await signUp(req.body, req.file)
  await sendMail(req.body)
  res.status(200).json({ name, email })
}))

routes.post('/refreshToken', wrapAsync(async (req, res) => {
  const accessToken = await refreshToken(req.body)
  res.status(200).json({ accessToken })
}))

routes.delete('/signOut', wrapAsync(async (req, res) => {
  await signOut(req.body)
  res.status(200).json({ message: '로그아웃 되었습니다.' })
}))

export default routes
