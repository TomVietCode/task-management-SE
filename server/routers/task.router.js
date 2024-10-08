const express = require('express')
const router = express.Router()
const controller = require('../controllers/task.controller')

router.get('/', controller.task)

router.get('/detail/:id',controller.detail)

router.get("/sub-task/:taskId", controller.subTask)

router.patch('/change-status/:id', controller.changeStatus)

router.patch('/changeMulti', controller.changeMulti)

router.post('/create', controller.create)

router.patch('/edit/:id', controller.edit)

router.patch("/add-user", controller.addUser)

router.delete('/delete/:id',controller.delete)

router.get("/statistic/status", controller.statusStatistic)
module.exports = router