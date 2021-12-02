import jwt from 'jsonwebtoken'

export function authenticateToken(req, res, next) {
  // header에서 toekn 값 추출
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  // 토근 없으면 400 에러 리턴
  if (!token) return res.sendStatus(400)

  // 토근에서 유저정보 추출하여 리턴 
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userObj) => {
    if (err) return res.sendStatus(401)
    req.userInfo = { name: userObj.name, email: userObj.email, _id: userObj._id, image: userObj.image }
    next()
  })
}