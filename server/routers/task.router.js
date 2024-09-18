const express = require('express')
const router = express.Router()
const controller = require('../controllers/task.controller')

router.get('/', controller.task)

router.patch('/change-status', controller.changeStatus)

router.patch('/changeMulti', controller.changeMulti)
module.exports = router