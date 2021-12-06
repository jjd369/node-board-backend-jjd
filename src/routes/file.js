
import { Router } from 'express'
import wrapAsync from '../logs/errorHandler'
import fileModle from '../models/file'
import fs from 'fs'
import { getObject } from '../services/awsS3Service'

const routes = Router()

routes.get('/', wrapAsync(async (req, res) => {
  const fileStream = await getObject(req.query.key)
  res.attachment(req.query.key)
  fileStream.Body.pipe(res)
  // const objectData = fileStream.Body.toString('utf-8')

  // res.write(fileStream.Body)
  // res.setHeader('Content-Disposition', `attachment; filename=test.jpg`)
  // res.end(fileStream)
  // res.json({ message: '얍' })
  // fileStream.pipe(res)
  // const fileRecord = await fileModle.findOne({ serverFileName: req.params.serverFileName, originalFileName: req.params.originalFileName })
  // let filePath = path.join(__dirname, '..', 'uploads', req.params.serverFileName)
  // res.download(filePath, fileRecord.originalFileName)
}))

export default routes