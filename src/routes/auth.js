import { Router } from 'express'
import { signIn, signUp, signOut, refreshToken } from '@/services/authService'
import wrapAsync from '@/logs/errorHandler'

const routes = Router()

routes.post('/signIn', wrapAsync(async (req, res) => {
  const { accessToken, refreshToken } = await signIn(req.body)
  res.status(200).json({ accessToken, refreshToken })
}))

routes.post('/signUp', wrapAsync(async (req, res) => {
  const result = await signUp(req.body)
  res.status(200).json(result)
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
