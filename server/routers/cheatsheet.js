const { Router } = require('express')
const getCheatsheet = require('../controllers/cheatsheet/item')
const newCheatsheet = require('../controllers/cheatsheet/new')
const tags = require('../controllers/cheatsheet/tags')
const validateJWT = require('../middlewares/validateJWT')

const router = Router()

router.post('/new', validateJWT, newCheatsheet)
router.get('/:uid', validateJWT, getCheatsheet)
router.get('/tags', validateJWT, tags)

module.exports = router
