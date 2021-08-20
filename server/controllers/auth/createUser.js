const { response } = require('express')

const createUser = (req, res = response) => {
  const { email, password } = req.body

  return res.status(200).json({
    ok: true,
    email,
    password
  })
}

module.exports = createUser
