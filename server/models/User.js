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
  picture: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
}, {
  toObject: {
    transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
      return ret
    }
  },
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
      return ret
    }
  }
})

module.exports = model('User', UserSchema)
