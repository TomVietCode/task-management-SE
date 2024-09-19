const taskRouter = require('./task.router')

const userRouter = require('./user.router')

const AuthMiddleware = require("../middleware/auth.middleware")

module.exports = (app) => {
  app.use('/task',AuthMiddleware.requireAuth, taskRouter)

  app.use('/user', userRouter)
}