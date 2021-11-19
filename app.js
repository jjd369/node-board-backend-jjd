import express from 'express'
import { startDatabase } from '@/config/database'
import routes from '@/routes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
// db 연결
startDatabase()

// 라우트 연결
app.use('/api', routes)


/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

/// error handlers
app.use((err, req, res, next) => {
  /**
   * Handle 401 thrown by express-jwt library
   */
  if (err.name === 'UnauthorizedError') {
    return res
      .status(err.status)
      .send({ message: err.message })
      .end();
  }
  return next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    errors: {
      message: err.message,
    },
  })
})

app.listen(3000)
