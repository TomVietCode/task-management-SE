const express = require('express');
const routeUser = express.Router();
const controller = require('../controllers/user.controller')

routeUser.post('/register', controller.register)

routeUser.post('/login', controller.login)

routeUser.post('/logout', controller.logout)

routeUser.post('/password/forgotpass',controller.forgotpass)

routeUser.post('/password/otp', controller.otp)
module.exports = routeUser