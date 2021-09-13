const { Router } = require('express')
const newSheet = require('../controllers/sheet/new')

const router = Router()

router.post('/new', newSheet)

module.exports = router
