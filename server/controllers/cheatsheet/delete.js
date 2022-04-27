const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')

const deleteCheatsheet = async (req, res = response) => {
  const { uid } = req.body

  try {
    const cheatsheet = await Cheatsheet.findByIdAndDelete(uid)

    if (!cheatsheet) { res.status(400).json({ ok: false, msg: 'Cheatsheet not found' }) }

    res.status(200).json({
      ok: true,
      data: {}
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: 'Error al eliminar el Cheatsheet'
    })
  }
}

module.exports = deleteCheatsheet
