const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')
const User = require('../../models/User')

const newCheatsheet = async (req, res = response) => {
  const { id: userId, name, body } = req
  try {
    const user = await User.findById(userId)
    if (!user) {
      res.status(400).json({ ok: false, data: 'User not found' })
    }
    const cs = await Cheatsheet.create({
      title: body.title,
      description: body.description,
      section: body.section,
      tags: body.tags,
      private: body.private,
      favorite: body.favorite,
      content: body.content,
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

module.exports = newCheatsheet
