const Router = require('express')
const borderRadiusController = require('../controllers/borderRadius.controller')

const router = new Router()
const path = 'borderRadius'

router.post('/' + path + '', borderRadiusController.createBorderRadius)
router.get('/' + path + '', borderRadiusController.getBorderRadius) 
router.get('/' + path + '/:id', borderRadiusController.getOneBorderRadius)
router.put('/' + path + '', borderRadiusController.updateBorderRadius)
router.delete('/' + path + '/:id', borderRadiusController.deleteBorderRadius)

module.exports = router