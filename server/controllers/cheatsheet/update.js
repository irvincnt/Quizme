const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')

const updateCheatsheet = async (req, res = response) => {
  const { id, created, ...cheatsheet } = req.body
  try {
    const cs = await Cheatsheet.findOneAndUpdate(id, cheatsheet, {
      new: true
    })
    if (!cs) {
      res.status(400).json({ ok: false, msg: 'Error al actualizar cs' })
    }

    res.status(200).json({
      ok: true,
      data: cs
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
