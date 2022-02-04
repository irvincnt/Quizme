const { Router } = require('express')
const validateJWT = require('../middlewares/validateJWT')
const createSheet = require('../controllers/sheet/create')

const router = Router()

router.post('/create', validateJWT, createSheet)

module.exports = router
