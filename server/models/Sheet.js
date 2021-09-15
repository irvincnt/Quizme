const { Schema, model } = require('mongoose')

const SheetSchema = Schema({
  title: { type: String, required: true },
  author: { type: Schema.ObjectId, ref: 'User' },
  favorites: { type: Boolean, required: true, default: false },
  published: { type: Boolean, required: true, default: false },
  created: { type: Date, default: Date.now },
  publishedAt: { type: Date },
  cells: {
    type: Array,
    default: [{ id: 0, title: '', rows: [{ id: 0, value: '', opts: {} }] }]
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

module.exports = model('Sheet', SheetSchema)
