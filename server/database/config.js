const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CDN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    console.log('DB Online')
  } catch (error) {
    console.log(error)
    throw new Error('Error al iniciar DB')
  }
}

module.exports = dbConnection
