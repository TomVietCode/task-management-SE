const express = require('express');
const routeUser = express.Router();
const controller = require('../controllers/user.controller')

routeUser.post('/register', controller.register)

module.exports = routeUser