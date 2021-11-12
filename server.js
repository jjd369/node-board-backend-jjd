require('dotenv').config()

const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const fileUpload = require('express-fileupload');

const { insertUser, getUsers, getUser, deleteUser, updateUser } = require('./database/users.js')
const { insertToken, getToken, deleteToken, getTokens } = require('./database/refreshTokens.js');
const { insertBoard, getAllBoard } = require('./database/board.js')

const app = express()

app.use(fileUpload())
app.use(cors())
app.use(express.json())

// users
app.get('/me', authenticateToken, (req, res) => {
  res.json({ name: req.userName })
})
app.get('/users', authenticateToken, async (req, res) => {
  res.send(await getUsers())
})

app.post('/users', async (req, res) => {
  try {
    // 아이디 중복 체크 
    if (await getUser({ name: req.body.user }) !== null) return res.status(400).json({ message: '중복된 아이디입니다.' })
    // 비밀번호 암호화 
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const userObj = { name: req.body.user, password: hashedPassword }
    // db에 저장
    await insertUser(userObj)
    res.status(201).send({ message: '회원가입이 완료 되었습니다.' })
  } catch {
    res.status(500).send({ data: 'error' })
  }
})

// board 
app.post('/write', authenticateToken, async (req, res) => {
  try {
    // db에 저장
    const board = { user: req.userName, title: req.body.title, content: req.body.content }

    await insertBoard(board)
    res.status(201).json({ message: '글이 등록 되었습니다.' })

  } catch {
    res.status(500).json({ message: 'error' })
  }
})

app.get('/board', authenticateToken, async (req, res) => {
  res.json(await getAllBoard())
})

// auth
app.get('/tokens', async (req, res) => {
  const tokens = await getTokens()
  res.json(tokens)
})

app.post('/token', async (req, res) => {
  // body에 token 값 존재 유무 확인
  const refreshToken = req.body.token
  if (!refreshToken) return res.sendStatus(401)
  // db에 refreshtoken 확인
  const [token] = await getToken(refreshToken)
  if (!token) return res.sendStatus(403)

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, userObj) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: userObj.name })
    res.json({ accessToken })
  })
})

app.post('/login', async (req, res) => {
  try {
    // body에서 user 값 가져오기
    const userName = { name: req.body.user }
    // db에서 user 값 추출
    const userObj = await getUser(userName)
    if (userObj === null) return res.status(400).json({ message: '아이디나 비밀번호를 확인해 주세요.' })
    // password 확인 
    if (await bcrypt.compare(req.body.password, userObj.password)) {
      // toekn 발급
      const accessToken = generateAccessToken(userObj)
      const refreshToken = generateRfreshToken(userObj)
      // refreshToekn db에 저장
      await insertToken(refreshToken)
      res.json({ accessToken, refreshToken, message: '로그인 되었습니다.' })
    } else {
      res.status(400).json({ message: '아이디나 비밀번호를 확인해 주세요.' })
    }
  } catch {
    res.status(500).send()
  }
})

app.delete('/logout', async (req, res) => {
  try {
    await deleteToken(req.body.token)
    res.status(204).json({ message: '로그아웃 되었습니다.' })
  } catch {
    res.status(500).send()

  }

})

// generateToken
function generateAccessToken(obj) {
  return jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s' })
}
function generateRfreshToken(obj) {
  return jwt.sign(obj, process.env.REFRESH_TOKEN_SECRET)
}

// check token 
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.sendStatus(400)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userObj) => {
    if (err) return res.sendStatus(401)

    req.userName = userObj.name
    next()
  })
}

app.listen(3000)