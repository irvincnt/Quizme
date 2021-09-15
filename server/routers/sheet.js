const { Router } = require('express')
const newSheet = require('../controllers/sheet/new')
const validateJWT = require('../middlewares/validateJWT')

const router = Router()

router.post('/new', validateJWT, newSheet)

module.exports = router
