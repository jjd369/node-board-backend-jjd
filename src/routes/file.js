
import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import wrapAsync from '@/logs/errorHandler'
import fileModle from '@/models/file'
import file from '@/models/file'
import { authenticateToken } from '@/middlewares/isAuth'

const routes = Router()

routes.get('/:fileName', wrapAsync(async (req, res) => {
  const fileRecord = await fileModle.findOne({ serverFileName: req.params.fileName })
  let filePath = path.join(__dirname, '..', 'uploads', req.params.fileName)
  // const stream = fs.createReadStream(filePath)
  // res.writeHead(200, {
  //   'Content-Type': 'application/octet-stream',
  //   'Content-Disposition': 'attachment; filename=' + fileRecord.originalFileName
  // });
  // stream.pipe(res)
  res.download(filePath, fileRecord.originalFileName);
}))

export default routes