import { Router } from 'express'
import wrapAsync from '../logs/errorHandler'
import { authenticateToken } from '../middlewares/isAuth'
import { getBoard, getBoards, writeBoard, updateBoard, deleteBoard, getMyBoards } from '../services/boardService'
import { uploadUserImage } from '../middlewares/uploadFile'

const routes = Router()

routes.get('/boards', authenticateToken, wrapAsync(async (req, res) => {
  const result = await getBoards(req.query)
  res.json(result).status(200)
}))

routes.get('/myBoards', authenticateToken, wrapAsync(async (req, res) => {
  const result = await getMyBoards(req.query, req.userInfo)
  res.json(result).status(200)
}))

routes.get('/boards/:id', authenticateToken, wrapAsync(async (req, res) => {
  const boardRecord = await getBoard(req.params.id)
  res.json(boardRecord).status(200)
}))

routes.post('/write', authenticateToken, uploadUserImage.array('attachment', 3), wrapAsync(async (req, res) => {
  await writeBoard(req.body, req.userInfo, req.files)
  res.json({ message: '글 작성 완료' }).status(200)
}))

routes.post('/update', authenticateToken, uploadUserImage.array('attachment', 3), wrapAsync(async (req, res) => {

  await updateBoard(req.body, req.userInfo, req.files)
  return res.json({ message: '글 수정 완료' })

}))

routes.delete('/delete', authenticateToken, wrapAsync(async (req, res) => {
  const result = await deleteBoard(req.body, req.userInfo)
  res.json({ message: '삭제 되었습니다.', ...result }).status(200)
}))

export default routes