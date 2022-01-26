const { response } = require('express')
const Cheatsheet = require('../../models/Cheatsheet')

const home = async (req, res = response) => {
  try {
    const allCheatSheets = await Cheatsheet.find({
      $or: [{
        $and: [
          { author: req.id },
          { permissions: 'public' }
        ]
      }, {
        $and: [
          { author: req.id },
          { permissions: 'private' }
        ]
      }, { permissions: 'public' }]
    }).populate('author', 'name picture')

    res.status(200).json({
      ok: true,
      allCheatSheets
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: 'Error home'
    })
  }
}

module.exports = home
