const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')
const Sheet = require('../../models/Cheatsheet')

const createSheet = async (req, res = response) => {
  const { id, body } = req
  try {
    const cheatsheet = await Cheatsheet.findById(id)
    if (!cheatsheet) {
      res.status(400).json({ ok: false, data: 'Cheatsheet not found' })
    }

    const sheet = await Sheet.create({
      title: body.title,
      favorite: body.favorite,
      config: body.config,
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
