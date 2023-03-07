const Router = require('express')
const shadowController = require('../controllers/shadow.controller')

const router = new Router()
const path = 'shadow'

router.post('/' + path + '', shadowController.createShadow)
router.get('/' + path + '', shadowController.getShadow) 
router.get('/' + path + '/:id', shadowController.getOneShadow)
router.put('/' + path + '', shadowController.updateShadow)
router.delete('/' + path + '/:id', shadowController.deleteShadow)

module.exports = router