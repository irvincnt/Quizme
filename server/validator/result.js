const { validationResult } = require('express-validator')
const { response } = require('express')

const resultValidator = (req, res = response, next) => {
  const errorFormatter = ({ msg }) => (msg)
  const errors = validationResult(req).formatWith(errorFormatter)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  return next()
}

module.exports = resultValidator
