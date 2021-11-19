const { response } = require('express')
const generateJWT = require('../../helpers/jwt')
const bcrypt = require('bcryptjs')
const User = require('../../models/User')
const axios = require('axios').default

const loginWithFacebook = async (req, res = response) => {
  const { userId, accessToken } = req.body

  const url = `https://graph.facebook.com/v11.0/${userId}/?fields=id,name,email,picture&access_token=${accessToken}`

  try {
    const result = await axios.get(url)
    const { name, email, picture } = result.data

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

    user.picture = picture.data.url

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
    console.log('ERROR =>', error.response.data)
    res.status(500).json({
      ok: false,
      msg: 'Error login with Facebook'
    })
  }
}

module.exports = loginWithFacebook
