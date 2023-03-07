const Router = require('express')
const colorController = require('../controllers/color.controller')

const router = new Router()
const path = 'color'

router.post('/' + path + '', colorController.createColor)
router.get('/' + path + '', colorController.getColor) 
router.get('/' + path + '/:id', colorController.getOneColor)
router.put('/' + path + '', colorController.updateColor)
router.delete('/' + path + '/:id', colorController.deleteColor)

module.exports = router