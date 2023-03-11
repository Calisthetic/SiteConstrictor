const Router = require('express')
const positionController = require('../controllers/position.controller')

const router = new Router()
const path = 'position'

router.post('/' + path + '', positionController.createPosition)
router.get('/' + path + '', positionController.getPosition) 
router.get('/' + path + '/:id', positionController.getOnePosition)
router.put('/' + path + '', positionController.updatePosition)
router.delete('/' + path + '/:id', positionController.deletePosition)

module.exports = router