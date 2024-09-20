const express = require('express')
const app = express()
const routerIndex = require('./routers/index.router')
const database = require('./config/database')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const port = 5000;
database.connect()

//cookie parser
app.use(cookieParser())

//body parser
app.use(bodyParser.json())

routerIndex(app)

app.listen( port, (req, res) => {
    console.log('Server is running on port 5000')
})