import express from 'express'
import { startDatabase } from './src/config/database'
import routes from './src/routes'
import cors from 'cors'
import path from 'path'
import history from 'connect-history-api-fallback'

const app = express()

app.use(express.json())
app.use(cors())
app.use(history(
  { verbose: true },
  { disableDotRule: true },
))
// db 연결
startDatabase()

// build 된 vue로 연결
app.use(express.static(path.join(__dirname, 'public')))

// 라우트 연결
app.use('/api', routes)

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err['status'] = 404
  next(err)
})
require('dotenv').config()
/// error handlers
app.use((err, req, res, next) => {
  /**
   * Handle 401 thrown by express-jwt library
   */
  if (err.name === 'UnauthorizedError') {
    return res
      .status(err.status)
      .send({ message: err.message })
      .end()
  }
  return next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    errors: {
      message: err.message,
    },
  })
})

app.listen(process.env.PORT || 3000)
