const { response } = require('express')
const Sheet = require('../../models/Sheet')

const getSheet = async (req, res = response) => {
  const { params: { uid } } = req

  try {
    const sheet = await Sheet.findById(uid).populate('cheatsheet', 'author')
    if (!sheet) {
      res.status(400).json({ ok: false, data: 'Sheet not found' })
    }

    res.status(200).json({
      ok: true,
      data: { sheet }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error al buscar el sheet'
    })
  }
}

module.exports = getSheet
