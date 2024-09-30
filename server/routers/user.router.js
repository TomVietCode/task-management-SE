const express = require('express');
const routeUser = express.Router();
const controller = require('../controllers/user.controller')
const AuthMiddleware = require("../middleware/auth.middleware")

routeUser.post('/register', controller.register)

routeUser.post('/login', controller.login)

routeUser.post('/logout', controller.logout)

routeUser.post('/password/forgotpass',controller.forgotpass)

routeUser.post('/password/otp', controller.otp)

routeUser.patch('/password/reset-password',AuthMiddleware.requireAuth, controller.resetPassword)

routeUser.get('/detail',AuthMiddleware.requireAuth, controller.detail)

routeUser.get('/list',AuthMiddleware.requireAuth, controller.list)

module.exports = routeUser