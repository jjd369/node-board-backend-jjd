import { Router } from 'express'
import usersModel from '@/models/users'
import wrapAsync from '@/logs/errorHandler'
import { authenticateToken } from '@/middlewares/isAuth'
const routes = Router()

routes.get('/me', authenticateToken, wrapAsync(async (req, res) => {
  // 유저 이름 리턴
  const name = req.userInfo.name
  const email = req.userInfo.email
  res.json({ name, email }).status(200)
}))

export default routes