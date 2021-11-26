
import { Router } from 'express'
import path from 'path'
import wrapAsync from '@/logs/errorHandler'
import fileModle from '@/models/file'

const routes = Router()

routes.get('/:serverFileName/:originalFileName', wrapAsync(async (req, res) => {
  const fileRecord = await fileModle.findOne({ serverFileName: req.params.serverFileName, originalFileName: req.params.originalFileName })
  let filePath = path.join(__dirname, '..', 'uploads', req.params.serverFileName)
  res.download(filePath, fileRecord.originalFileName)
}))

export default routes