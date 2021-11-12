require('dotenv').config()

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import usersModel from '@/models/users'
import tokensModel from '@/models/tokens'
// import { insertToken, getToken, deleteToken } from '@/controllers/tokenController'

// 회원가입
export async function signUp(data) {
  const { email, name, password } = data
  // email 중복 확인
  const userRecord = await usersModel.findOne({ email })
  if (userRecord) throw new Error('이메일이 중복 되었습니다.')
  // 해싱 패스워드
  const hashedPassword = await bcrypt.hash(password, 10)

  const userObj = { name, password: hashedPassword, email }
  // db에 user 생성
  const result = await usersModel.create(userObj)

  if (!result) throw new Error('계정 생성이 실패했습니다.')

  return result
}

// 로그인
export async function signIn(data) {
  const { email, password } = data
  // 이메일 확인
  const userRecord = await usersModel.findOne({ email })
  if (!userRecord) throw new Error('이메일을 확인해주세요.')
  // 비밀번호 확인
  if (!await bcrypt.compare(password, userRecord.password)) throw new Error('비밀번호를 확인해주세요.')

  // 토큰 생성
  const accessToken = generateAccessToken({ email: userRecord.email, name: userRecord.name, _id: userRecord._id })
  const refreshToken = generateRfreshToken({ email: userRecord.email, name: userRecord.name, _id: userRecord._id })
  // db에 refresh token 저장
  await await tokensModel.create({ refreshToken })

  return { accessToken, refreshToken, name: userRecord.name }
}

// 로그아웃 
export async function signOut(data) {
  // refresh token 조회
  const tokenRecord = await tokensModel.findOne(data)
  if (!tokenRecord) throw new Error('해당 토큰이 존재하지 않습니다.')
  // db에서 토큰 삭제
  return tokensModel.deleteOne(data)

}

// 토근 재발급
export async function refreshToken(data) {
  // refresh token 조회
  const tokenRecode = await tokensModel.findOne(data)
  if (!tokenRecode) throw new Error('사용할 수 없는 토큰입니다.')

  // 유효한지 확인
  return jwt.verify(data.refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, userRecord) => {
    if (err) throw new Error('토큰이 유효하지 않습니다.')
    // 토큰 재발급 
    const accessToken = generateAccessToken({ email: userRecord.email, name: userRecord.name, _id: userRecord._id })
    return accessToken
  })
}

// 토근 생성
function generateAccessToken(user) {
  // 만료 기간 30분
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
}
function generateRfreshToken(user) {
  // 만료 기간 7일
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}
