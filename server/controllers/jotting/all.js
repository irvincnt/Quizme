const { response } = require('express')
const Sheet = require('../../models/Sheet')

const getJottingsByCheatsheet = async (req, res = response) => {
  const { params: { uid } } = req

  try {
    const sheets = await Sheet.find({ cheatsheet: uid })

    res.status(200).json({
      ok: true,
      data: { sheets }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error al buscar apuntes'
    })
  }
}

module.exports = getJottingsByCheatsheet
