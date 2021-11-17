const { response } = require('express')
const Sheet = require('../../models/Sheet')
const User = require('../../models/User')

const newSheet = async (req, res = response) => {
  const { id: userId, name, body } = req

  try {
    const user = await User.findById(userId)
    if (!user) {
      res.status(400).json({ ok: false, data: 'User not found' })
    }
    const sheet = await Sheet.create({ 
      title: 'titulo', 
      rows: body.sheet.rows, 
      config: body.sheet.config, 
      author: userId })

    res.status(200).json({
      ok: true,
      data: {
        author: name,
        sheet
      }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error'
    })
  }
}

module.exports = newSheet
