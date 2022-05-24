const { response } = require('express')
const { OAuth2Client } = require('google-auth-library')
const generateJWT = require('../../helpers/jwt')
const bcrypt = require('bcryptjs')
const User = require('../../models/User')

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const loginWithGoogle = async (req, res = response) => {
  const { token: tokenGoogle } = req.body

  try {
    // Validate google token
    const ticket = await client.verifyIdToken({
      idToken: tokenGoogle,
      audience: (process.env.CLIENT_ID)
    })

    const { email, name, picture } = ticket.payload

    // Search user
    let user = await User.findOne({ email })

    if (!user) {
      user = new User({ name, email }) // New user
      // Generate password for new user
      const password = email + process.env.JWT_SECRET
      // encrypt password
      const salt = bcrypt.genSaltSync()
      user.password = bcrypt.hashSync(password, salt)
    }

    user.picture = picture
    user.loginWith = 'Google'

    // Save user with new data
    const newUser = await user.save()
    // New token
    const tokenUser = await generateJWT(newUser.id, newUser.name)

    res.status(200).json({
      ok: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        picture: newUser.picture
      },
      token: tokenUser
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error login with Google'
    })
  }
}

module.exports = loginWithGoogle
