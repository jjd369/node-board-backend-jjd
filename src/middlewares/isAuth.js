import jwt from 'jsonwebtoken'

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.sendStatus(400)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userObj) => {
    if (err) return res.sendStatus(401)

    req.userName = userObj.name
    next()
  })
}