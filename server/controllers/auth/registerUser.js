const { response } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../../models/User')
const generateJWT = require('../../helpers/jwt')

const registerUser = async (req, res = response) => {
  const { name, email, password } = req.body

  try {
    // Search user
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ ok: false, msg: 'User already exists' })
    }

    // create user
    user = new User({ name, email })

    // encrypt password
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)
    user.loginWith = 'Normal'

    // save user
    const newUser = await user.save()

    // generate token with JWT
    const token = await generateJWT(newUser.id, newUser.name)

    return res.status(200).json({
      ok: true,
      token,
      user: { id: newUser.id, name: newUser.name }
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error creating user'
    })
  }
}

module.exports = registerUser
