const Router = require('express')
const textShadowController = require('../controllers/textShadow.controller')

const router = new Router()
const path = 'textShadow'

router.post('/' + path + '', textShadowController.createShadow)
router.get('/' + path + '', textShadowController.getShadow) 
router.get('/' + path + '/:id', textShadowController.getOneShadow)
router.put('/' + path + '', textShadowController.updateShadow)
router.delete('/' + path + '/:id', textShadowController.deleteShadow)

module.exports = router