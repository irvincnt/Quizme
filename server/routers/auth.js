const { Router } = require('express')
const registerUser = require('../controllers/auth/registerUser')
const loginUser = require('../controllers/auth/loginUser')
const { signupValidator } = require('../validator/auth')
const resultValidator = require('../validator/result')

const router = Router()

router.post('/register', signupValidator, resultValidator, registerUser)
router.post('/', loginUser)

module.exports = router
