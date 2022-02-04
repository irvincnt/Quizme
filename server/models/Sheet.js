const { Schema, model } = require('mongoose')

const SheetSchema = Schema({
  title: { type: String, required: true },
  favorite: { type: Boolean, required: true, default: false },
  config: { type: Object, required: true },
  cheatsheet: { type: Schema.ObjectId, ref: 'Cheatsheet' },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
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

module.exports = model('Sheet', SheetSchema)
