import { Router } from 'express'
import board from '@/routes/board'
import user from '@/routes/user'
import auth from '@/routes/auth'


const routes = Router()

routes.use('/board', board)
routes.use('/user', user)
routes.use('/auth', auth)


export default routes