const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')

const getCheatsheet = async (req, res = response) => {
  const { params: { uid } } = req
  try {
    const cheatsheet = await Cheatsheet.findById(uid)
    if (!cheatsheet) {
      res.status(400).json({ ok: false, data: 'Cheatsheet not found' })
    }

    res.status(200).json({
      ok: true,
      data: { cheatsheet }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error al buscar el cheatsheet'
    })
  }
}

module.exports = getCheatsheet
