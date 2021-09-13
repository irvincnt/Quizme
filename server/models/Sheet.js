const { Schema, model } = require('mongoose')

const SheetSchema = Schema({
  title: { type: String, required: true },
  author: { type: Schema.ObjectId, ref: 'User' },
  favorites: { type: Array, required: true, default: [] },
  published: { type: Boolean, required: true, default: false },
  created: { type: Date, default: Date.now },
  publishedAt: { type: Date },
  cells: {
    type: Array,
    default: [{ id: 0, title: '', rows: [{ id: 0, value: '', opts: {} }] }]
  }
})

module.exports = model('Sheet', SheetSchema)
