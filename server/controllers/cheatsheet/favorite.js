const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')

const cheatsheetFavorite = async (req, res = response) => {
  const { id, favorite } = req.body
  try {
    const cheatsheet = await Cheatsheet.findById(id)
    if (!cheatsheet) {
      res.status(400).json({ ok: false, data: 'Cheatsheet no encontrado' })
    }

    cheatsheet.favorite = favorite
    cheatsheet.updated = Date.now()

    res.status(200).json({
      ok: true,
      data: { cheatsheet }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error al actualizar el cheatsheet'
    })
  }
}

module.exports = cheatsheetFavorite
