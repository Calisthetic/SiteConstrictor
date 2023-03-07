const Router = require('express')
const borderController = require('../controllers/border.controller')

const router = new Router()
const path = 'border'

router.post('/' + path + '', borderController.createBorder)
router.get('/' + path + '', borderController.getBorder) 
router.get('/' + path + '/:id', borderController.getOneBorder)
router.put('/' + path + '', borderController.updateBorder)
router.delete('/' + path + '/:id', borderController.deleteBorder)

module.exports = router