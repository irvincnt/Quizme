const { response } = require('express')

const newSheet = async (req, res = response) => {
  res.status(200).json({
    ok: true,
    data: 'Sheet creado'
  })
}

module.exports = newSheet
