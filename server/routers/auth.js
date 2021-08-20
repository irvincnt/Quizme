const { Router } = require('express')
const createUser = require('../controllers/auth/createUser')
const { signupValidator } = require('../validator/auth')
const resultValidator = require('../validator/result')

const router = Router()

router.post('/new', signupValidator, resultValidator, createUser)

module.exports = router
