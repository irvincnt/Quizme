const { response } = require('express')
const generateJWT = require('../../helpers/jwt')

const renewTokenUser = async (req, res = response) => {
  const { id, name } = req

  const token = await generateJWT(id, name)
  return res.status(200).json({
    ok: true,
    token,
    user: {
      id: req.id,
      name: req.name
    }
  })
}

module.exports = renewTokenUser
