const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')

const updateCheatsheet = async (req, res = response) => {
  const { id, favorite, tags, title, description, section } = req.body

  try {
    const cheatsheet = await Cheatsheet.findById(id)
    if (!cheatsheet) {
      res.status(400).json({ ok: false, msg: 'El cheatsheet no se encuentra' })
    }
    cheatsheet.title = title
    cheatsheet.description = description
    cheatsheet.tags = tags
    cheatsheet.favorite = favorite
    cheatsheet.section = section
    cheatsheet.updated = Date.now()

    const cheatsheetUpdated = await cheatsheet.save()

    res.status(200).json({
      ok: true,
      data: cheatsheetUpdated
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error al actualizar'
    })
  }
}

module.exports = updateCheatsheet
