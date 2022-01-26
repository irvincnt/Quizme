const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')
const User = require('../../models/User')

const newSheet = async (req, res = response) => {
  const { id: userId, name, body } = req

  try {
    const user = await User.findById(userId)
    if (!user) {
      res.status(400).json({ ok: false, data: 'User not found' })
    }

    const cs = await Cheatsheet.create({
      title: body.cheatsheet.title,
      description: body.cheatsheet.description,
      section: body.cheatsheet.section,
      tags: body.cheatsheet.tags,
      private: body.cheatsheet.private,
      favorite: body.cheatsheet.favorite,
      content: body.cheatsheet.content,
      author: userId
    })

    res.status(200).json({
      ok: true,
      data: {
        author: name,
        cs
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
