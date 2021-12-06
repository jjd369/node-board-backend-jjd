
import { Router } from 'express'
import wrapAsync from '../logs/errorHandler'
import { getObject } from '../services/awsS3Service'

const routes = Router()

routes.get('/attachment/:key', wrapAsync(async (req, res) => {
  const { fileStream, originalFileName } = await getObject(`attachment/${req.params.key}`)
  res.attachment(originalFileName)
  fileStream.createReadStream().pipe(res)
}))

export default routes