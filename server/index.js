const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const authRouters = require('./routers/auth')

const apiRoute = (routeName) => `/api/${routeName}`
app.use(apiRoute('auth'), authRouters)

const port = process.env.PORT || 9000
app.listen(port, () => {
  return console.log(`Servidor corriendo en el puerto ${port}`)
})
