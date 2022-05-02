const { Router } = require('express')
const validateJWT = require('../middlewares/validateJWT')
const createJotting = require('../controllers/jotting/create')
const getJotting = require('../controllers/jotting/item')
const updateJotting = require('../controllers/jotting/update')
const deleteJotting = require('../controllers/jotting/delete')

const router = Router()

router.post('/create', validateJWT, createJotting)
router.get('/:uid', validateJWT, getJotting)
router.put('/update', validateJWT, updateJotting)
router.delete('/delete', validateJWT, deleteJotting)


module.exports = router
