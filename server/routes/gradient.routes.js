const Router = require('express')
const gradientController = require('../controllers/gradient.controller')

const router = new Router()
const path = 'gradient'

router.post('/' + path + '', gradientController.createGradient)
router.get('/' + path + '', gradientController.getGradient) 
router.get('/' + path + '/:id', gradientController.getOneGradient)
router.put('/' + path + '', gradientController.updateGradient)
router.delete('/' + path + '/:id', gradientController.deleteGradient)

module.exports = router