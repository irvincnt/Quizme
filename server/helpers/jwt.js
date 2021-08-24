const jwt = require('jsonwebtoken')

const generateJWT = (id, name) => {
  return new Promise((resolve, reject) => {
    const payload = { id, name }

    jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '2h' }, (e, token) => {
      if (e) {
        reject(new Error('Error generating token'))
      }
      resolve(token)
    })
  })
}

module.exports = generateJWT
