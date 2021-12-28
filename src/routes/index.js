import { Router } from 'express'
import board from './board'
import user from './user'
import auth from './auth'
import comment from './comment'
import file from './file'
// import mail from './mail'

const routes = Router()

routes.use('/board', board)
routes.use('/user', user)
routes.use('/auth', auth)
routes.use('/comment', comment)
routes.use('/file', file)
// routes.use('/mail', mail)


export default routes