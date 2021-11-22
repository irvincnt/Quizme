const { Router } = require('express')
const home = require('../controllers/home/home')
const validateJWT = require('../middlewares/validateJWT')

const router = Router()

router.get('/', validateJWT, home)

module.exports = router
