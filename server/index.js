const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 9000
app.listen(port, () => {
  return console.log(`Servidor corriendo en el puerto ${port}`)
})
