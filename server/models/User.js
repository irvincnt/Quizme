const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  birdhday: {
    type: Date
  },
  gender: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('User', UserSchema)
