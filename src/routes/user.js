import { Router } from 'express'
import usersModel from '@/models/users'
import wrapAsync from '@/logs/errorHandler'
import { authenticateToken } from '@/middlewares/isAuth'
const routes = Router()

routes.get('/me', authenticateToken, wrapAsync(async (req, res) => {
  userRecord = await usersModel.findOne({})
  res.json(userRecord).state(200)
}))

export default routes