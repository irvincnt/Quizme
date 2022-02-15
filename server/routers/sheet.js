const { Router } = require('express')
const validateJWT = require('../middlewares/validateJWT')
const createSheet = require('../controllers/sheet/create')
const getSheet = require('../controllers/sheet/item')
const updateJotting = require('../controllers/sheet/update')

const router = Router()

router.post('/create', validateJWT, createSheet)
router.get('/:uid', validateJWT, getSheet)
router.put('/update', validateJWT, updateJotting)

module.exports = router
