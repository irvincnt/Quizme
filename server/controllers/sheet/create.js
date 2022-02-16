const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')
const Sheet = require('../../models/Sheet')

const createSheet = async (req, res = response) => {
  const { idCheatsheet, title, favorite, settings, rows } = req.body
  try {
    const cheatsheet = await Cheatsheet.findById(idCheatsheet)

    if (!cheatsheet) {
      res.status(400).json({ ok: false, data: 'Cheatsheet not found' })
    }

    const sheet = await Sheet.create({
      title: title,
      favorite: favorite,
      settings: settings,
      rows: rows,
      cheatsheet: cheatsheet.id,
      created: Date.now()
    })

    res.status(200).json({
      ok: true,
      data: { sheet }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error creating sheet'
    })
  }
}

module.exports = createSheet
