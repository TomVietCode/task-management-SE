const express = require('express')
const app = express()
const routerIndex = require('./routers/index.router')
const database = require('./config/database')

database.connect()
routerIndex(app)

app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000')
})