const { Router } = require('express')
const registerUser = require('../controllers/auth/registerUser')
const loginUser = require('../controllers/auth/loginUser')
const renewTokenUser = require('../controllers/auth/renewUser')
const { signupValidator } = require('../validator/auth')
const resultValidator = require('../validator/result')
const validateJWT = require('../middlewares/validateJWT')

const router = Router()

router.post('/login', loginUser)
router.post('/register', signupValidator, resultValidator, registerUser)
router.post('/renew', validateJWT, renewTokenUser)

module.exports = router
