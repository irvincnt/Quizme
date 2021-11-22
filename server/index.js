const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dbConnection = require('./database/config')

const app = express()

dbConnection()

app.use(cors())
app.use(express.json())

const authRouters = require('./routers/auth')
const sheetRouters = require('./routers/sheet')
const homeRouters = require('./routers/home')

const apiRoute = (routeName) => `/api/${routeName}`
app.use(apiRoute('auth'), authRouters)
app.use(apiRoute('sheet'), sheetRouters)
app.use(apiRoute('home'), homeRouters)

const port = process.env.PORT || 9000
app.listen(port, () => {
  return console.log(`Servidor corriendo en el puerto ${port}`)
})
