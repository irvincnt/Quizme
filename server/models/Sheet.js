const { Schema, model } = require('mongoose')

const SheetSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: Schema.ObjectId, ref: 'User' },
  favorites: { type: Boolean, required: true, default: false },
  section: { type: Object },
  tags: { type: Array },
  published: { type: Boolean, required: true, default: false },
  created: { type: Date, default: Date.now },
  publishedAt: { type: Date },
  rows: { type: Array },
  config: { type: Object },
  permissions: { type: String, required: true }
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
