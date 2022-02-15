const { response } = require('express')
const Sheet = require('../../models/Sheet')

const updateJotting = async (req, res = response) => {
  const { id, title, settings, rows, favorite } = req.body

  try {
    const jotting = await Sheet.findById(id)
    if (!jotting) {
      res.status(400).json({ ok: false, msg: 'Jotting not fount' })
    }
    jotting.title = title
    jotting.settings = settings
    jotting.rows = rows
    jotting.favorite = favorite || false
    jotting.updated = Date.now()

    const jottingUpdated = await jotting.save()

    res.status(200).json({
      ok: true,
      data: { jottingUpdated }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      ok: false,
      msg: 'Error updating jotting'
    })
  }
}

module.exports = updateJotting
