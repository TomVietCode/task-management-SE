const express = require('express')
const app = express()
const routerIndex = require('./routers/index.router')
const database = require('./config/database')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
database.connect()

//cookie parser
app.use(cookieParser())


//body parser
app.use(bodyParser.json())

routerIndex(app)

app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000')
})