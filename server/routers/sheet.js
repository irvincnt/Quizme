const { Router } = require('express')
const newSheet = require('../controllers/sheet/new')
const tags = require('../controllers/sheet/tags')
const validateJWT = require('../middlewares/validateJWT')

const router = Router()

router.post('/new', validateJWT, newSheet)
router.get('/tags', validateJWT, tags)

module.exports = router
