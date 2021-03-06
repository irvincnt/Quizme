const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dbConnection = require('./database/config')

const app = express()

dbConnection()

app.use(cors())
app.use(express.json())

const homeRouters = require('./routers/home')
const authRouters = require('./routers/auth')
const cheatsheetRouters = require('./routers/cheatsheet')
const jottingRouters = require('./routers/jotting')

const apiRoute = (routeName) => `/api/${routeName}`
app.use(apiRoute('auth'), authRouters)
app.use(apiRoute('home'), homeRouters)
app.use(apiRoute('cheatsheet'), cheatsheetRouters)
app.use(apiRoute('jotting'), jottingRouters)

const port = process.env.PORT || 9000
app.listen(port, () => {
  return console.log(`Servidor corriendo en el puerto ${port}`)
})
