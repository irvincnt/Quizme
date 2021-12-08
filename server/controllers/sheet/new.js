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
      title: body.sheet.title,
      description: body.sheet.description,
      rows: body.sheet.rows,
      config: body.sheet.config,
      section: body.sheet.section,
      tags: body.sheet.tags,
      permissions: body.sheet.permissions,
      author: userId
    })

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
      msg: 'Error al guardar el sheet'
    })
  }
}

module.exports = newSheet
