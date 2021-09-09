const { Router } = require('express')
const registerUser = require('../controllers/auth/registerUser')
const loginUser = require('../controllers/auth/loginUser')
const renewTokenUser = require('../controllers/auth/renewUser')
const { signupValidator } = require('../validator/auth')
const resultValidator = require('../validator/result')
const validateJWT = require('../middlewares/validateJWT')
const loginWithGoogle = require('../controllers/auth/loginGoogle')
const loginWithFacebook = require('../controllers/auth/loginFacebook')

const router = Router()

router.post('/login', loginUser)
router.post('/google-login', loginWithGoogle)
router.post('/facebook-login', loginWithFacebook)
router.post('/register', signupValidator, resultValidator, registerUser)
router.get('/renew', validateJWT, renewTokenUser)

module.exports = router
