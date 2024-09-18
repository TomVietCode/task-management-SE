const taskRouter = require('./task.router')

module.exports = (app) => {
  app.use('/task', taskRouter)
  
}