import { Router } from 'express'
import board from '@/routes/board'
import user from '@/routes/user'
import auth from '@/routes/auth'
import comment from '@/routes/comment'


const routes = Router()

routes.use('/board', board)
routes.use('/user', user)
routes.use('/auth', auth)
routes.use('/comment', comment)

export default routes