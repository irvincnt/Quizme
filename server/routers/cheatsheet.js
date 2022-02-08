const { Router } = require('express')
const cheatsheetFavorite = require('../controllers/cheatsheet/favorite')
const getCheatsheet = require('../controllers/cheatsheet/item')
const newCheatsheet = require('../controllers/cheatsheet/new')
const tags = require('../controllers/cheatsheet/tags')
const updateCheatsheet = require('../controllers/cheatsheet/update')
const getJottingsByCheatsheet = require('../controllers/sheet/all')
const validateJWT = require('../middlewares/validateJWT')

const router = Router()

router.post('/new', validateJWT, newCheatsheet)
router.get('/:uid', validateJWT, getCheatsheet)
router.put('/update', validateJWT, updateCheatsheet)
router.put('/favorite', validateJWT, cheatsheetFavorite)
router.get('/tags', validateJWT, tags)

router.get('/:uid/sheets', validateJWT, getJottingsByCheatsheet)

module.exports = router
