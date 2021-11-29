import { Router } from 'express'
import wrapAsync from '../logs/errorHandler'
import { authenticateToken } from '../middlewares/isAuth'
import { upload } from '../middlewares/uploadFile'
import { getBoard, getBoards, writeBoard, updateBoard, deleteBoard } from '../services/boardService'

const routes = Router()

routes.get('/boards', authenticateToken, wrapAsync(async (req, res) => {
  const result = await getBoards(req.query)
  res.json(result).status(200)
}))

routes.get('/boards/:id', authenticateToken, wrapAsync(async (req, res) => {
  const boardRecord = await getBoard(req.params.id)
  res.json(boardRecord).status(200)
}))

routes.post('/write', upload.single('attachment'), authenticateToken, wrapAsync(async (req, res) => {
  const result = await writeBoard(req.body, req.userInfo, req.file)
  res.json({ message: '글 작성 완료', ...result }).status(200)
}))

routes.post('/update', upload.single('attachment'), authenticateToken, wrapAsync(async (req, res) => {
  const result = await updateBoard(req.body, req.userInfo, req.file)
  return res.json({ message: '글 수정 완료 파일과 함께', ...result })

}))

routes.delete('/delete', authenticateToken, wrapAsync(async (req, res) => {
  const result = await deleteBoard(req.body.id)
  res.json({ message: '삭제 되었습니다.', ...result }).status(200)
}))

export default routes