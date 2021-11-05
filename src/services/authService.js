require('dotenv').config()
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import { getUser, insertUser } from '@/controllers/usersController'
import usersModel from '@/models/users'
import { insertToken, getToken } from '@/controllers/tokenController'

// 회원가입
export async function signUp(data) {
  const { email, name, password } = data
  // email 중복 확인
  const userRecord = await usersModel.findOne({ email })
  if (userRecord) throw new Error('이메일이 중복 되었습니다.')
  // hasing password
  const hashedPassword = await bcrypt.hash(password, 10)

  const userObj = { name, password: hashedPassword, email }
  const result = await usersModel.create(userObj)

  if (!result) throw new Error('계정 생성이 실패했습니다.')

  return result
}

// 로그인
export async function signIn(data) {
  const { email, password } = data

  const userRecord = await usersModel.findOne({ email })
  // 이메일 확인
  if (!userRecord) throw new Error('이메일을 확인해주세요.')
  // 비밀번호 확인
  if (!await bcrypt.compare(password, userRecord.password)) throw new Error('비밀번호를 확인해주세요.')

  const accessToken = generateAccessToken({ email: userRecord.email, name: userRecord.name })
  const refreshToken = generateRfreshToken({ email: userRecord.email, name: userRecord.name })

  await insertToken({ refreshToken })
  return { accessToken, refreshToken }
}

// 토근 재발급
export async function refreshToken(data) {
  // db에서 토큰 확인
  const tokenRecode = await getToken(data)
  if (!tokenRecode) throw new Error('사용할 수 없는 토큰입니다.')

  // 유효한지 확인
  return jwt.verify(data.refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, userRecord) => {
    if (err) throw new Error('토큰이 유효하지 않습니다.')
    // 토큰 재발급 
    const accessToken = generateAccessToken({ email: userRecord.email, name: userRecord.name })
    return accessToken
  })

}

// 토근 생성
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s' })
}
function generateRfreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
}
