const { response } = require('express')
const Sheet = require('../../models/Sheet')

const deleteSheet = async (req, res = response) => {
  const { uid } = req.body

  try {
    const sheet = await Sheet.findByIdAndDelete(uid)

    if (!sheet) { res.status(400).json({ ok: false, msg: 'Sheet not found' }) }

    res.status(200).json({
      ok: true,
      data: {}
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error al eliminar el sheet'
    })
  }
}

module.exports = deleteSheet
