const { Schema, model } = require('mongoose')

const CheatSheetSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  favorite: { type: Boolean, required: true, default: false },
  section: { type: Object, required: true },
  private: { type: Boolean, required: true, default: true },
  tags: { type: Array, required: true },
  author: { type: Schema.ObjectId, ref: 'User' },
  created: { type: Date, default: Date.now },
  content: { type: Array }
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

module.exports = model('Cheatsheet', CheatSheetSchema)
