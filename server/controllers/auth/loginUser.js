const { response } = require('express')
const bcrypt = require('bcryptjs')

const User = require('../../models/User')
const generateJWT = require('../../helpers/jwt')

const loginUser = async (req, res = response) => {
  const { email, password } = req.body
  try {
    // search user
    const user = await User.findOne({ email })
    if (!user) { return res.status(400).json({ ok: false, msg: 'User not found' }) }

    // validate password
    const validPassword = bcrypt.compareSync(password, user.password)
    console.log(validPassword)
    if (!validPassword) { return res.status(400).json({ ok: false, msg: 'Password invalid' }) }

    // generate token with JWT
    const token = await generateJWT(user.id, user.name)

    res.status(200).json({
      ok: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        picture: user.picture
      }
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error login user'
    })
  }
}

module.exports = loginUser
